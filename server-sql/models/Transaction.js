const { BadRequestError } = require("../errors");
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: {
            msg: "Please provide detail for the transaction",
          },
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide amount for the transaction",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["income", "expense"]],
        },
        defaultValue: "income",
      },
      currency: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["USD", "NGN"]],
        },
        defaultValue: "USD",
      },
      //   account: {
      //     type: Types.ObjectId,
      //     ref: "Account",
      //     required: [true, "Please provide an account"],
      //   },
      flutterTrxId: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["pending", "paid"]],
        },
        defaultValue: "pending",
      },
    },
    {
      timestamps: true,
      hooks: {
        beforeCreate: (transaction) => {
          if (transaction.amount < 1 && transaction.currency === "USD")
            throw new BadRequestError("Please provide a valid transaction");
        },
      },
    }
  );
  return Transaction;
};
