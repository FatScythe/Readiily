const router = require("express").Router();
const { showMe, getDesigners } = require("../controller/accountCtrl");
const {
  authenticateAccount,
  authorizePermissions,
} = require("../middlewares/authentication");

router.get("/showMe", authenticateAccount, showMe);
router.get(
  "/designers",
  [authenticateAccount, authorizePermissions("admin")],
  getDesigners
);

module.exports = router;
