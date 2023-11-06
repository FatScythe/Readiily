const { Schema, model, Types } = require("mongoose");

const SocialSchema = new Schema({
  media: String,
  handle: String,
});

const BrandSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a brand name"],
    },
    color: [String],
    font: String,
    fontUrl: String,
    socials: [SocialSchema],
    website: String,
    logoDark: String,
    logoLight: String,
    industry: [String],
    account: {
      type: Types.ObjectId,
      ref: "Accounts",
      required: [true, "Please provide an account"],
    },
  },
  { timestamps: true }
);

module.exports = model("Brands", BrandSchema);
