const { Schema, model, Types } = require("mongoose");
const Transaction = require("./Transaction");

const WalletSchema = new Schema(
  {
    balance: {
      type: Number,
      required: [true, "Please provide wallet balance"],
    },
    currency: {
      type: String,
      enum: ["USD", "NGN"],
      default: "USD",
    },
    account: {
      type: Types.ObjectId,
      ref: "Account",
      unique: [true, "Users can only have one wallet"],
      required: [true, "Please provide an account"],
    },
  },
  { timestamps: true }
);

WalletSchema.pre("save", async function (next) {
  if (this.balance < 0 && this.currency === "USD") {
    return next({
      statusCode: 404,
      message: "Balance in wallet cannot be less than zero",
    });
  }
});

WalletSchema.methods.createTransaction = async function (detail, amount, type) {
  await Transaction.create({
    detail,
    amount,
    type,
    account: this.account,
    status: "paid",
  });
};

module.exports = model("Wallets", WalletSchema);
