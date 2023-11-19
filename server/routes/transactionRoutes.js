const router = require("express").Router();
const { createTransaction } = require("../controller/TransactionCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createTransaction);

module.exports = router;
