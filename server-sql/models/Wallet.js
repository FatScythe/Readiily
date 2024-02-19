const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {}

  Wallet.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["USD", "NGN"]],
        },
        defaultValue: "USD",
      },
      // account: {
      //   type: Types.ObjectId,
      //   ref: "Account",
      //   unique: [true, "Users can only have one wallet"],
      //   required: [true, "Please provide an account"],
      // },
    },
    { sequelize, timestamps: true, tableName: "Wallets" }
  );

  return Wallet;
};

// WalletSchema.pre("save", async function (next) {
//   if (this.balance < 0 && this.currency === "USD") {
//     return next({
//       statusCode: 404,
//       message: "Balance in wallet cannot be less than zero",
//     });
//   }
// });

// WalletSchema.methods.createTransaction = async function (detail, amount, type) {
//   await Transaction.create({
//     detail,
//     amount,
//     type,
//     account: this.account,
//     status: "paid",
//   });
// };
