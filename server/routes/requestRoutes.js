const router = require("express").Router();
const {
  createRequest,
  getBrandRequests,
  getMonthRequests,
  assignRequest,
  getAssignedRequest,
  acceptRequest,
  uploadResponse,
  getDesignHistory,
} = require("../controller/requestCtrl");

const {
  authenticateAccount,
  authorizePermissions,
} = require("../middlewares/authentication");

router
  .route("/")
  .post(authenticateAccount, createRequest)
  .get([authenticateAccount, authorizePermissions("admin")], getMonthRequests);

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

router.patch(
  "/response",
  [authenticateAccount, authorizePermissions("admin", "designer")],
  uploadResponse
);

router.get(
  "/history",
  [authenticateAccount, authorizePermissions("admin", "designer")],
  getDesignHistory
);

router
  .route("/:id")
  .get(
    authenticateAccount,
    [authenticateAccount, authorizePermissions("admin", "designer")],
    getBrandRequests
  );

module.exports = router;
