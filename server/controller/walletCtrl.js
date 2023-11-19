const Wallet = require("../model/Wallet");
const Transaction = require("../model/Transaction");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const getMyWallet = async (req, res) => {
  const wallet = await Wallet.findOne({ account: req.user.userId });
  const transactions = await Transaction.find({ account: req.user.userId });

  if (transactions.length === 0) {
    return res.status(StatusCodes.OK).json({
      balance: wallet.balance,
      income: 0,
      expense: 0,
      transactions,
    });
  }

  const [income] = await Transaction.aggregate([
    {
      $match: {
        account: new mongoose.Types.ObjectId(req.user.userId),
        type: "expense",
        status: "paid",
      },
    },
  ]).addFields({
    income: { $sum: "$amount" },
  });

  const [expense] = await Transaction.aggregate([
    {
      $match: {
        account: new mongoose.Types.ObjectId(req.user.userId),
        type: "income",
        status: "paid",
      },
    },
  ]).addFields({
    expense: { $sum: "$amount" },
  });

  res.status(StatusCodes.OK).json({
    walletBalance: wallet.balance,
    walletId: wallet._id,
    income: income ? income.income : 0,
    expense: expense ? expense.expense : 0,
    transactions,
  });
};

module.exports = { getMyWallet };
