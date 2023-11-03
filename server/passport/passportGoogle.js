const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const Account = require("../model/Account");
const { BadRequestError } = require("../errors");

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/oauth2/redirect/google",
      scope: ["profile", "email"],
    },
    async function verify(issuer, profile, cb) {
      try {
        let account;
        account = await Account.findOne({ email: profile.emails[0].value });

        if (account && account.authType !== "google") {
          return cb(null, false, {
            message: "Email already exist",
          });
        }

        if (!account) {
          account = await Account.create({
            email: profile.emails[0].value,
            name: profile.displayName,
            googleId: profile.id,
            authType: "google",
          });
        }

        const user = {
          userId: account._id,
          name: account.name,
          email: account.email,
          avatar: account.avatar,
          role: account.role,
        };

        return cb(null, user);
      } catch (error) {
        console.log(error);

        return cb(error);
      }
    }
  )
);
