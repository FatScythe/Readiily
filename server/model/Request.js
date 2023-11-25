const { Schema, Types, model } = require("mongoose");

const RequestSchema = new Schema(
  {
    desc: {
      type: String,
      required: [true, "Please provide request description"],
    },
    design: String,
    image: String,
    date: {
      type: Date,
      required: [true, "Please provide a schedule date"],
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending",
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
