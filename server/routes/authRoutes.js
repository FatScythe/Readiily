const router = require("express").Router();
const { register, login } = require("../controller/authPwdCtrl");
const passport = require("../passport/passportLocal");

router.post("/register/password", register);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { user });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.post("/login/password", passport.authenticate("local"), login);

module.exports = router;
