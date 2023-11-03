const router = require("express").Router();
const { register, login, logout } = require("../controller/authPwdCtrl");
const { googleLogin } = require("../controller/authGoogleCtrl");
const passportLocal = require("../passport/passportLocal");
const passportGoogle = require("../passport/passportGoogle");

router.post("/register/password", register);

passportLocal.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { user });
  });
});

passportLocal.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.post("/login/password", passportLocal.authenticate("local"), login);

passportGoogle.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { user });
  });
});

passportGoogle.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.get("/login/google", passportGoogle.authenticate("google"));

router.get(
  "/oauth2/redirect/google",
  passportGoogle.authenticate("google", {
    failureRedirect: "http://localhost:3000/auth",
  }),
  googleLogin
);

router.delete("/logout", logout);

module.exports = router;
