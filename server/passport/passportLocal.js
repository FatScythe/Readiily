var passport = require("passport");
var LocalStrategy = require("passport-local");
var Account = require("../model/Account");
const { BadRequestError, NotFoundError } = require("../errors");

module.exports = passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    try {
      const account = await Account.findOne({ email: username });
      if (account && account.authType !== "email") {
        throw new BadRequestError("Account was not created with password");
      }
      if (!account) {
        throw new NotFoundError("Invalid Credentials");
      }

      const isPasswordCorrect = await account.comparePassword(password);
      if (!isPasswordCorrect) {
        // throw new BadRequestError("Invalid Credentials");
        return cb(null, false, {
          message: "Invalid Credentials.",
        });
      }

      return cb(null, {
        userId: account._id,
        name: account.name,
        email: account.email,
        avatar: account.avatar,
        role: account.role,
      });
    } catch (error) {
      console.log(error);
      return cb(error);
    }
  })
);
