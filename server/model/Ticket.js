const { Schema, Types, model } = require("mongoose");

const TicketSchema = new Schema(
  {
    subject: {
      type: String,
      required: [true, "Please provide subject"],
    },
    message: {
      type: String,
      required: [true, "Please provide message"],
    },
    attachments: [String],
    status: {
      type: String,
      enum: ["open", "close", "pending"],
      default: "open",
    },
    ticketId: {
      type: String,
      unique: [true, "Provide unique ticket id"],
    },
    account: {
      type: Types.ObjectId,
      ref: "Accounts",
      required: [true, "Please provide an account"],
    },
    brand: {
      type: Types.ObjectId,
      ref: "Brands",
      required: [true, "Please provide a brand"],
    },
  },
  { timestamps: true }
);

module.exports = model("Tickets", TicketSchema);
