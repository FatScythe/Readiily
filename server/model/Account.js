const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const AccountSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your full name"],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
      required: [true, "Please provide email"],
    },
    password: {
      type: String,
      maxLength: 6,
    },
    avatar: {
      type: String,
      default: "/images/avatar.png",
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minLength: [6, "Password cannot be less than 6 characters"],
    },
    role: {
      type: String,
      enum: ["user", "designer", "admin"],
      default: "user",
      required: [true, "Please provide role"],
    },
    authType: {
      type: String,
      enum: ["email", "google"],
      default: "email",
      required: [true, "Please provide authentication type"],
    },
  },
  { timestamps: true }
);

AccountSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(this.password, salt);
  this.password = password;
});

AccountSchema.methods.comparePassword = async function (candidatePwd) {
  const isMatch = await bcrypt.compare(candidatePwd, this.password);
  return isMatch;
};

module.exports = model("Users", AccountSchema);
