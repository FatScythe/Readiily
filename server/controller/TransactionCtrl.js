const Transaction = require("../model/Transaction");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createTransaction = async (req, res) => {
  const { amount, detail } = req.body;

  if (!amount && typeof amount !== "number") {
    throw new BadRequestError("Please provide a valid amount");
  }

  if (!detail) {
    throw new BadRequestError("Please provide transaction description");
  }

  const transaction = await Transaction.create({
    amount,
    detail,
    account: req.user.userId,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Transction created", transaction });
};

const getAllTransaction = async (req, res) => {
  const transactions = await Transaction.find({});

  res.status(StatusCodes.OK).json(transactions);
};
module.exports = { createTransaction, getAllTransaction };
