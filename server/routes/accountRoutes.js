const router = require("express").Router();
const {
  showMe,
  getDesigners,
  createDesigner,
  editDesigner,
  deleteDesigner,
} = require("../controller/accountCtrl");
const {
  authenticateAccount,
  authorizePermissions,
} = require("../middlewares/authentication");

router.get("/showMe", authenticateAccount, showMe);
router
  .route("/designers")
  .get([authenticateAccount, authorizePermissions("admin")], getDesigners)
  .post([authenticateAccount, authorizePermissions("admin")], createDesigner);

router
  .route("/designers/:id")
  .patch([authenticateAccount, authorizePermissions("admin")], editDesigner)
  .delete([authenticateAccount, authorizePermissions("admin")], deleteDesigner);

module.exports = router;
