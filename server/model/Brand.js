const { Schema, model, Types } = require("mongoose");

const SocialSchema = new Schema({
  media: String,
  handle: String,
});

const BrandSchema = new Schema(
  {
    name: {
      type: String,
      unique: [true, "Brand name already exists"],
      required: [true, "Please provide a brand name"],
    },
    colors: {
      type: [String],
      default: [],
    },
    font: {
      type: String,
      required: [true, "Please provide a brand font"],
    },
    fontUrl: String,
    socials: {
      type: [SocialSchema],
      default: [],
    },
    email: {
      type: String,
      required: [true, "Please provide a brand email"],
    },
    website: String,
    logoDark: String,
    logoLight: String,
    industry: {
      type: [String],
      default: [],
    },
    account: {
      type: Types.ObjectId,
      ref: "Accounts",
      required: [true, "Please provide an account"],
    },
  },
  { timestamps: true }
);

module.exports = model("Brands", BrandSchema);
