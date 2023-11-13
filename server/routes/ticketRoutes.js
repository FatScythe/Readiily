const router = require("express").Router();
const {
  createTicket,
  getTickets,
  getSingleTicket,
  replyTicket,
} = require("../controller/ticketCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router
  .route("/")
  .post(authenticateAccount, createTicket)
  .get(authenticateAccount, getTickets)
  .patch(authenticateAccount, replyTicket);

router.route("/:id").get(authenticateAccount, getSingleTicket);

module.exports = router;
