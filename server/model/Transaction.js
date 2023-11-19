const { Schema, model, Types } = require("mongoose");

const TranSchema = new Schema(
  {
    detail: {
      type: String,
      required: [true, "Please provide detail for the transaction"],
    },
    amount: {
      type: Number,
      required: [true, "Please provide amount for the transaction"],
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      default: "income",
    },
    currency: {
      type: String,
      enum: ["USD", "NGN"],
      default: "USD",
    },
    account: {
      type: Types.ObjectId,
      ref: "Account",
      required: [true, "Please provide an account"],
    },
    flutterTrxId: String,
    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  { timestamps: true }
);

TranSchema.pre("save", async function (next) {
  if (this.amount < 1 && this.currency === "USD") {
    return next({
      statusCode: 404,
      message: "Please provide a valid transaction",
    });
  }
});

module.exports = model("Transactions", TranSchema);
