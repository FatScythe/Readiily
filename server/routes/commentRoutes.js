const router = require("express").Router();
const {
  createComment,
  getBrandComments,
} = require("../controller/commentCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createComment);

router.route("/:id").get(authenticateAccount, getBrandComments);

module.exports = router;
