const router = require("express").Router();
const { register, login } = require("../controller/authCtrl");

router.post("/register/password", register);
router.post("/login/password", login);

module.exports = router;
