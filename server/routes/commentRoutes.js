const router = require("express").Router();
const { createComment } = require("../controller/commentCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createComment);

module.exports = router;
