const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const useCloudinary = require("../utils/useCloudinary");
const Ticket = require("../model/Ticket");

const createTicket = async (req, res) => {
  const { subject, message, brand } = req.body;

  const tickets = await Ticket.countDocuments();

  let ticketId = "#RDY" + tickets.toString().padStart(8, "-0");

  //  Math.random().toString(35).slice(2).toUpperCase();

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
    if (req.files.attachments) {
      const isArray = Array.isArray(req.files.attachments);
      if (isArray) {
        attachments = await Promise.all(
          req.files.attachments.map(async (file) => {
            result = await useCloudinary(
              file,
              "",
              "/Ticket/" + tickets,
              file.name
            );
            if (result && result.msg) {
              return res.status(result.status).json({
                msg: result.msg,
              });
            }
            return result;
          })
        );
      } else {
        const file = req.files.attachments;
        result = await useCloudinary(file, "", "/Ticket/" + tickets, file.name);
        if (result && result.msg) {
          return res.status(result.status).json({
            msg: result.msg,
          });
        }
        attachments = [result];
      }
    }
  }

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

const getTickets = async (req, res) => {
  let tickets;
  if ((req.user.role = "admin")) {
    tickets = await Ticket.find({});
  } else {
    tickets = await Ticket.find({ account: req.user.userId });
  }
  res.status(StatusCodes.OK).json({ nb: tickets.length, tickets });
};

const getSingleTicket = async (req, res) => {
  const { id: ticketId } = req.params;

  const ticket = await Ticket.findOne({ _id: ticketId })
    .populate("account", "name avatar role")
    .populate("response.account", "name avatar role");

  if (!ticket) {
    throw new NotFoundError("No ticket with id: " + ticketId);
  }

  res.status(StatusCodes.OK).json(ticket);
};

const replyTicket = async (req, res) => {
  const { status, reply, ticketId } = req.body;

  const ticket = await Ticket.findOne({ _id: ticketId });

  ticket.status = status;
  const response = ticket.response;
  ticket.response = [...response, { reply, account: req.user.userId }];

  await ticket.save();

  res.status(StatusCodes.CREATED).json({ msg: "Reply added" });
};

module.exports = { createTicket, getTickets, getSingleTicket, replyTicket };
