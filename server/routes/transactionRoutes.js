const router = require("express").Router();
const {
  createTransaction,
  getAllTransaction,
} = require("../controller/TransactionCtrl");
const {
  authenticateAccount,
  authorizePermissions,
} = require("../middlewares/authentication");

router
  .route("/")
  .post(authenticateAccount, createTransaction)
  .get([authenticateAccount, authorizePermissions("admin")], getAllTransaction);

module.exports = router;
