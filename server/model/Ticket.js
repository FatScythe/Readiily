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
    account: {
      type: Types.ObjectId,
      ref: "Accounts",
      required: [true, "Please provide an account"],
    },
    brand: {
      type: Types.ObjectId,
      ref: "Brands",
    },
  },
  { timestamps: true }
);

module.exports = model("Tickets", TicketSchema);
