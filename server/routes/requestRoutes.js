const router = require("express").Router();
const {
  createRequest,
  getBrandRequests,
} = require("../controller/requestCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createRequest);

router.route("/:id").get(authenticateAccount, getBrandRequests);

module.exports = router;
