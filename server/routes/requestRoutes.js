const router = require("express").Router();
const { createRequest } = require("../controller/requestCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createRequest);
module.exports = router;
