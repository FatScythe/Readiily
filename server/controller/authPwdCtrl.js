const Account = require("../model/Account");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
// var passport = require("passport");
// var LocalStrategy = require("passport-local");
// const crypto = require("crypto");
// const passport = require("../passport/passportLocal.js");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please fill all fields");
  }
  const isFirstAccount = (await Account.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const account = await Account.create({
    name,
    password,
    email,
    role,
  });

  res.status(StatusCodes.CREATED).json({ account });
};

const login = async (req, res) => {
  res.send(req.session);
};

module.exports = { register, login };
