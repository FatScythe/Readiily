const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const Account = require("../model/Account");
const Wallet = require("../model/Wallet");
const { BadRequestError } = require("../errors");

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      passReqToCallback: true,
      callbackURL: "/api/v1/auth/oauth2/redirect/google",
      scope: ["profile", "email"],
    },
    async function verify(req, issuer, profile, cb) {
      try {
        let account;
        account = await Account.findOne({ email: profile.emails[0].value });

        if (account && account.authType !== "google") {
          throw new BadRequestError("Email already exist");
        }

        // REGISTER
        if (!account) {
          let referralId = req.session.referrer;

          if (referralId) {
            const account = await Account.findOne({ _id: referralId });
            if (!account) {
              referralId = "";
            }
          } else {
            referralId = "";
          }

          account = await Account.create({
            email: profile.emails[0].value,
            name: profile.displayName,
            googleId: profile.id,
            authType: "google",
            referral: referralId,
          });

          if (account.role === "user") {
            const wallet = await Wallet.create({
              balance: process.env.REGISTRATION_BONUS,
              account: account._id,
            });
            await wallet.createTransaction(
              `Registration Bonus`,
              process.env.REGISTRATION_BONUS,
              "expense"
            );
          }
        }

        if (account.role !== "user") {
          throw new BadRequestError("Invalid Route");
        }

        // LOGIN
        const user = {
          userId: account._id,
          name: account.name,
          email: account.email,
          avatar: account.avatar,
          role: account.role,
        };

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
