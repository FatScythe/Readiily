const Account = require("../model/Account");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { attachCookieToResponse } = require("../utils/jwt");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please fill all fields");
  }
  if (password.length < 8) {
    throw new BadRequestError("Password should be minimum of 8 character");
  }
  const isFirstAccount = (await Account.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  await Account.create({
    name,
    password,
    email,
    role,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Account sucessfully created" });
};

const login = async (req, res) => {
  attachCookieToResponse(res, req.user);
  res.status(StatusCodes.OK).json(req.user);
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  req.session.destroy();
  res.status(StatusCodes.OK).json({ msg: "Logged Out Sucessfully" });
};

module.exports = { register, login, logout };
