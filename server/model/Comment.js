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
      ref: "Request",
      required: [true, "Please provide a brand"],
    },
  },
  { timestamps: true }
);

CommentSchema.pre("save", async function () {
  // Change request accepted to false
});

module.exports = model("Comments", CommentSchema);
