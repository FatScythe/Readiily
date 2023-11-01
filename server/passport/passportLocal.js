var passport = require("passport");
var LocalStrategy = require("passport-local");
var Account = require("../model/Account");

module.exports = passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    try {
      const user = await Account.findOne({ email: username });
      console.log(user);
      if (!user) {
        return cb(null, false, {
          message: "Incorrect credentials",
        });
      }

      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        return cb(null, false, {
          message: "Invalid Credentials.",
        });
      }

      return cb(null, user);
    } catch (error) {
      console.log(error);
      cb(error);
    }
  })
);
