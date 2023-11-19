const router = require("express").Router();

const { getMyWallet } = require("../controller/walletCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").get(authenticateAccount, getMyWallet);

module.exports = router;
