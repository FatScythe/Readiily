const router = require("express").Router();
const {
  createRequest,
  getBrandRequests,
  getAllRequest,
  assignRequest,
  getAssignedRequest,
} = require("../controller/requestCtrl");
const {
  authenticateAccount,
  authorizePermissions,
} = require("../middlewares/authentication");

router
  .route("/")
  .post(authenticateAccount, createRequest)
  .get([authenticateAccount, authorizePermissions("admin")], getAllRequest);

router.route("/:id").get(authenticateAccount, getBrandRequests);
router
  .route("/assign")
  .get(
    [authenticateAccount, authorizePermissions("designer")],
    getAssignedRequest
  )
  .patch([authenticateAccount, authorizePermissions("admin")], assignRequest);

module.exports = router;
