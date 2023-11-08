const { Schema, Types, model } = require("mongoose");

const RequestSchema = new Schema(
  {
    desc: {
      type: String,
      required: [true, "Please provide request description"],
    },
    image: String,
    date: {
      type: Date,
      required: [true, "Please provide a schedule date"],
    },
    response: String,
    accepted: {
      type: Boolean,
      default: false,
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
    designer: {
      type: Types.ObjectId,
      ref: "Brands",
    },
  },
  { timestamps: true }
);

module.exports = model("Requests", RequestSchema);
