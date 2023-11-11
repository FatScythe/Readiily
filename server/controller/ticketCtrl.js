const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const useCloudinary = require("../utils/useCloudinary");
const Ticket = require("../model/Ticket");

const createTicket = async (req, res) => {
  const { subject, message, brand } = req.body;

  const tickets = await Ticket.countDocuments();

  let ticketId =
    Math.random().toString(35).slice(2).toUpperCase() + tickets.toString();

  console.log(ticketId);

  if (!subject) {
    throw new BadRequestError("Please provide a subject");
  }
  if (!message) {
    throw new BadRequestError("Please provide message");
  }
  if (!brand) {
    throw new BadRequestError("Please provide a brand");
  }

  let attachments = [];
  let result = "";

  if (req.files) {
    attachments = await Promise.all(
      req.files.attachments.map(async (file) => {
        result = await useCloudinary(
          file,
          "image",
          "/Ticket/" + ticketId,
          file.name
        );
        return result;
      })
    );
  }

  console.log(attachments);

  await Ticket.create({
    subject,
    message,
    attachments,
    ticketId,
    brand,
    account: req.user.userId,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Added new ticket" });
};

module.exports = { createTicket };
