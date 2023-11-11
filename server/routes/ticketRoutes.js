const router = require("express").Router();
const { createTicket } = require("../controller/ticketCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.route("/").post(authenticateAccount, createTicket);

module.exports = router;
