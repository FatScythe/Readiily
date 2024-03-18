const { StatusCodes } = require("http-status-codes");
const { Account } = require("../model/Account");
const { BadRequestError, NotFoundError } = require("../errors");

const showMe = async (req, res) => {
  res.status(StatusCodes.OK).json(req.user);
};

const getDesigners = async (req, res) => {
  const designers = await Account.findAll({
    where: {
      role: "designer",
    },
    attributes: ["_id", "name", "role", "email", "avatar", "designerToken"],
  });

  res.status(StatusCodes.OK).json(designers);
};

const createDesigner = async (req, res) => {
  const { name, email, token } = req.body;

  if (!name || !email || !token) {
    throw new BadRequestError("Please provide designer name, email and token");
  }
  await Account.create({ name, email, designerToken: token, role: "designer" });

  res.status(StatusCodes.CREATED).json({ msg: "Designer created" });
};

const editDesigner = async (req, res) => {
  const { id } = req.params;
  const { name, email, token } = req.body;

  const designer = await Account.findOne({
    where: {
      _id: id,
    },
  });

  if (!name || !email || !token) {
    throw new BadRequestError("Please provide designer name, email and token");
  }

  if (!designer) {
    throw new NotFoundError("No designer with id " + id);
  }

  designer.name = name;
  designer.email = email;
  designer.designerToken = token;

  await designer.save();

  res.status(StatusCodes.OK).json({ msg: "Designer updated" });
};

const deleteDesigner = async (req, res) => {
  const { id } = req.params;
  const designer = await Account.findOne({
    where: {
      _id: id,
    },
  });

  if (!designer) {
    throw new NotFoundError("No designer with id " + id);
  }

  await designer.destroy();

  res.status(StatusCodes.OK).json({ msg: "Designer deleted" });
};

module.exports = {
  showMe,
  getDesigners,
  createDesigner,
  editDesigner,
  deleteDesigner,
};
