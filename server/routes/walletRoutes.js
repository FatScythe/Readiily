const router = require("express").Router();

const { getMyWallet, getRefferalBonus } = require("../controller/walletCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").get(authenticateAccount, getMyWallet);

router.patch("/referral", authenticateAccount, getRefferalBonus);

module.exports = router;
