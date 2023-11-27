const Account = require("../model/Account");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const createTokenAccount = require("../utils/createTokenAccount");
const { attachCookieToResponse } = require("../utils/jwt");
const sendResetPasswordEmail = require("../utils/sendResetPasswordEmail");
const createHash = require("../utils/createHash");
const Wallet = require("../model/Wallet");
const crypto = require("crypto");

const register = async (req, res) => {
  const { name, email, password, referrer } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please fill all fields");
  }

  if (password.length < 8) {
    throw new BadRequestError("Password should be minimum of 8 character");
  }

  let referralId = referrer;

  if (referralId) {
    const account = await Account.findOne({ _id: referralId });
    if (!account) {
      referralId = null;
    }
  } else {
    referralId = null;
  }

  let accountObj = { name, password, email };

  if (referralId) {
    accountObj = { ...accountObj, ...(referralId && { referral: referralId }) };
  }

  account = await Account.create(accountObj);

  if (account.role === "account") {
    const wallet = await Wallet.create({
      balance: Number(process.env.REGISTRATION_BONUS),
      account: account._id,
    });
    await wallet.createTransaction(
      `Registration Bonus`,
      process.env.REGISTRATION_BONUS,
      "expense"
    );
  }

  res.status(StatusCodes.CREATED).json({ msg: "Account sucessfully created" });
};

const login = async (req, res) => {
  attachCookieToResponse(res, req.user);
  res.status(StatusCodes.OK).json(req.user);
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const account = await Account.findOne({ email });
  if (!account) {
    throw new NotFoundError("Invalid Credentials");
  }

  if (account.role !== "admin") {
    throw new BadRequestError("Invalid Route");
  }

  const isPasswordCorrect = await account.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new BadRequestError("Invalid Credentials!");
  }

  const tokenAccount = createTokenAccount(account);
  attachCookieToResponse(res, tokenAccount);

  res.status(StatusCodes.OK).json({ ...tokenAccount });
};

const loginDesigner = async (req, res) => {
  const { email, token } = req.body;
  if (!email || !token) {
    throw new BadRequestError("Please provide email and token");
  }
  const account = await Account.findOne({ email });
  if (!account) {
    throw new NotFoundError("Invalid Credentials");
  }

  if (account.role !== "designer") {
    throw new BadRequestError("Invalid Route");
  }

  const isPasswordCorrect = account.designerToken === token;

  if (!isPasswordCorrect) {
    throw new BadRequestError("Invalid Credentials!");
  }

  const tokenAccount = createTokenAccount(account);
  attachCookieToResponse(res, tokenAccount);

  res.status(StatusCodes.OK).json({ ...tokenAccount });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  req.session.destroy();
  res.status(StatusCodes.OK).json({ msg: "Logged Out Sucessfully" });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) throw new BadRequestError("Please provide an email");

  const account = await Account.findOne({ email });

  if (account) {
    if (account.authType !== "email") {
      throw new BadRequestError("Not a password account");
    }
    const passwordToken = crypto.randomBytes(70).toString("hex");

    const origin = process.env.DOMAIN;

    await sendResetPasswordEmail({
      name: account.name,
      email: account.email,
      passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10;

    account.passwordToken = createHash(passwordToken);
    account.passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    await account.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: "Please check your email for reset password link" });
};

const resetPassword = async (req, res) => {
  const { email, passwordToken, newPassword } = req.body;

  if (!email || !passwordToken || !newPassword)
    throw new BadRequestError("Please fill all fields");

  const account = await Account.findOne({ email });

  if (account) {
    const currentDate = new Date();

    if (
      account.passwordToken === createHash(passwordToken) &&
      account.passwordTokenExpirationDate > currentDate
    ) {
      account.password = newPassword;
      account.passwordToken = "";
      account.passwordTokenExpirationDate = null;

      await account.save();
    }
  }

  res.status(StatusCodes.OK).json({ msg: "Password has been reset" });
};

module.exports = {
  register,
  login,
  loginAdmin,
  loginDesigner,
  logout,
  forgotPassword,
  resetPassword,
};
