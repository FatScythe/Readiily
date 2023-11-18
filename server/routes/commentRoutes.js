const router = require("express").Router();
const {
  createComment,
  getBrandComments,
  getRequestComments,
} = require("../controller/commentCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createComment);

router
  .route("/request/:requestId")
  .get(authenticateAccount, getRequestComments);

router.route("/:id").get(authenticateAccount, getBrandComments);

module.exports = router;
