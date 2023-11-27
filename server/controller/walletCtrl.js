const Wallet = require("../model/Wallet");
const Transaction = require("../model/Transaction");
const Account = require("../model/Account");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const getMyWallet = async (req, res) => {
  let wallet = await Wallet.findOne({ account: req.user.userId });
  if (!wallet) {
    wallet = await Wallet.create({ balance: 0, account: req.user.userId });
  }
  const transactions = await Transaction.find({ account: req.user.userId });

  if (transactions.length === 0) {
    return res.status(StatusCodes.OK).json({
      walletBalance: wallet.balance,
      walletId: wallet._id,
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

const getRefferalBonus = async (req, res) => {
  const referrals = await Account.find({
    referral: req.user.userId,
    refarralClaim: false,
  });

  if (referrals.length < 2) {
    return res.status(StatusCodes.OK).json({
      status: "fail",
      msg: "You don't have enough referals to claim yet",
    });
  }

  let numOfReferrals = 0;

  for (const ref of referrals) {
    const account = await Account.findOne({ _id: ref._id });
    if (account) {
      account.refarralClaim = true;
      await account.save();
      numOfReferrals += 1;
    }
  }

  const AMOUNT_REDEEMABLE = numOfReferrals * process.env.REFERRAL_PRICE;

  const wallet = await Wallet.findOne({ account: req.user.userId });

  const former_balance = wallet.balance;

  wallet.balance = former_balance + AMOUNT_REDEEMABLE;

  await wallet.save();

  await wallet.createTransaction(
    `Referral Bonus`,
    AMOUNT_REDEEMABLE,
    "expense"
  );

  res.status(StatusCodes.OK).json({
    status: "success",
    msg: `You earned $${AMOUNT_REDEEMABLE}`,
  });
};

module.exports = { getMyWallet, getRefferalBonus };
