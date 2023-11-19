const router = require("express").Router();
const { authenticateAccount } = require("../middlewares/authentication");
const flutterwave = require("../controller/flutterwaveCtrl");

router.post(
  "/flutterwave/acceptPayment",
  authenticateAccount,
  flutterwave.acceptPayment
);

router.get(
  "/flutterwave/verifyPayment/:id",
  authenticateAccount,
  flutterwave.verifyPayment
);

module.exports = router;
