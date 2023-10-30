const Account = require("../model/Account");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
var passport = require("passport");
var LocalStrategy = require("passport-local");
// const crypto = require("crypto");

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

passport.use(
  new LocalStrategy(async function verify(email, password, cb) {
    try {
      const account = await Account.findOne({ email });
      if (!account) {
        return cb(null, false, {
          message: "Incorrect credentials",
        });
      }

      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        return cb(null, false, {
          message: "Invalid Credentials.",
        });
      }

      return cb(null, account);
    } catch (error) {
      console.log(error);
      cb(error);
    }
  })
);

const login = async (req, res) => {
  passport.authenticate("local", {
    successRedirect: "/health-check",
    failureRedirect: "/health-check",
  });
  console.log("here");
};

module.exports = { register, login };
