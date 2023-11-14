const { Schema, Types, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, "Please provide comment"],
    },
    brand: {
      type: Types.ObjectId,
      ref: "Brands",
      required: [true, "Please provide a brand"],
    },
    request: {
      type: Types.ObjectId,
      ref: "Requests",
      required: [true, "Please provide a request"],
    },
  },
  { timestamps: true }
);

module.exports = model("Comments", CommentSchema);
