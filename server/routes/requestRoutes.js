const router = require("express").Router();
const {
  createRequest,
  getBrandRequests,
  getAllRequest,
  assignRequest,
  getAssignedRequest,
  acceptRequest,
} = require("../controller/requestCtrl");

const {
  authenticateAccount,
  authorizePermissions,
} = require("../middlewares/authentication");

router
  .route("/")
  .post(authenticateAccount, createRequest)
  .get([authenticateAccount, authorizePermissions("admin")], getAllRequest);

router
  .route("/assign")
  .patch([authenticateAccount, authorizePermissions("admin")], assignRequest)
  .get(
    [authenticateAccount, authorizePermissions("designer")],
    getAssignedRequest
  );

router.patch(
  "/accept",
  [authenticateAccount, authorizePermissions("designer")],
  acceptRequest
);

router.route("/:id").get(authenticateAccount, getBrandRequests);

module.exports = router;
