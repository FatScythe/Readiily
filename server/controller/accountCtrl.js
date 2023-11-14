const { StatusCodes } = require("http-status-codes");
const Account = require("../model/Account");

const showMe = async (req, res) => {
  res.status(StatusCodes.OK).json(req.user);
};

const getDesigners = async (req, res) => {
  const designers = await Account.find({ role: "designer" }).select(
    "name role email avatar"
  );

  res.status(StatusCodes.OK).json(designers);
};

module.exports = { showMe, getDesigners };
