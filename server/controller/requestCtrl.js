const { StatusCodes } = require("http-status-codes");
const Request = require("../model/Request");
const Brand = require("../model/Brand");
const useCloudinary = require("../utils/useCloudinary");
const { BadRequestError, NotFoundError, CustomAPIError } = require("../errors");
const Account = require("../model/Account");
const checkPermissions = require("../utils/checkPermissions");
const Wallet = require("../model/Wallet");

const createRequest = async (req, res) => {
  let { desc, date, brand } = req.body;
  let image = "";

  if (!date) {
    throw new BadRequestError("Please provide date for scheduled request");
  }

  const request = await Request.findOne({
    brand,
    date: new Date(date).toISOString(),
  });

  if (request) {
    throw new BadRequestError("You already made a request for this day");
  }

  const inputDate = new Date(date);
  const currentDate = new Date();

  inputDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const timestamp1 = Math.floor(inputDate.getTime() / 1000);
  const timestamp2 = Math.floor(currentDate.getTime() / 1000);

  if (timestamp1 < timestamp2) {
    throw new BadRequestError("Cannot schedule request at a past date");
  }
  if (!desc) {
    throw new BadRequestError("Please provide description for your request");
  }
  if (req.files) {
    const { imageFile } = req.files;
    if (imageFile) {
      image = await useCloudinary(
        imageFile,
        "image",
        "/Request",
        "image" + brand
      );
      if (image && image.msg) {
        return res.status(image.status).json({
          msg: image.msg,
        });
      }
    }
  }

  const wallet = await Wallet.findOne({ account: req.user.userId });
  if (!wallet) {
    throw new NotFoundError("User as no wallet");
  }
  let formerBalance = wallet.balance;
  if (formerBalance < process.env.REQUEST_PRICE) {
    throw new BadRequestError("Please fund wallet");
  }

  wallet.balance = formerBalance - process.env.REQUEST_PRICE;

  await wallet.save();

  await wallet.createTransaction(
    `Design Request`,
    process.env.REQUEST_PRICE,
    "income"
  );

  await Request.create({
    desc,
    date: new Date(date).toISOString(),
    brand,
    account: req.user.userId,
    image,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Request as been scheduled" });
};

const getBrandRequests = async (req, res) => {
  const { id: brandId } = req.params;

  const date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  const brand = await Brand.findOne({ _id: brandId }).select("_id name email");

  if (!brand) {
    throw new NotFoundError("No brand with id: " + brandId);
  }

  const requests = await Request.find({
    createdAt: {
      $gte: new Date(currentYear, currentMonth, -6).toISOString(), // 6 days b4 month
      $lt: new Date(currentYear, currentMonth, 36).toISOString(), // 6 or 7 days after month
    },
    brand: brandId,
  });

  res.status(StatusCodes.OK).json({
    nb: requests.length,
    requests,
    brand,
  });
};

const getMonthRequests = async (req, res) => {
  const date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  const requests = await Request.find({
    createdAt: {
      $gte: new Date(currentYear, currentMonth, -6).toISOString(), // 6 days b4 month
      $lt: new Date(currentYear, currentMonth, 36).toISOString(), // 6 or 7 days after month
    },
  }).populate("brand");

  res.status(StatusCodes.OK).json({ requests });
};

const assignRequest = async (req, res) => {
  const { requestId, designerId } = req.body;
  if (!requestId || requestId.length < 1) {
    throw new BadRequestError("Please provide request to assign");
  }
  const designer = await Account.findOne({ _id: designerId });
  if (!designer) {
    throw new BadRequestError("Please provide a designer");
  }
  for (const id of requestId) {
    const request = await Request.findOne({ _id: id });

    if (!request) {
      throw new NotFoundError("No request with id: " + id);
    }

    request.designer = designerId;
    await request.save();
  }

  res.status(StatusCodes.OK).json({ msg: "Request(s) assigned" });
};

const getAssignedRequest = async (req, res) => {
  const assignedRequests = await Request.find({
    designer: req.user.userId,
  }).populate("brand");

  res.status(StatusCodes.OK).json(assignedRequests);
};

const acceptRequest = async (req, res) => {
  const { requestId } = req.body;
  if (!requestId || requestId.length < 1) {
    throw new BadRequestError("Please provide request to assign");
  }

  for (const id of requestId) {
    const request = await Request.findOne({ _id: id });

    if (!request) {
      throw new NotFoundError("No request with id: " + id);
    }

    checkPermissions(req.user, request.designer);
    request.accepted = true;
    await request.save();
  }

  res.status(StatusCodes.OK).json({ msg: "Request(s) accepted" });
};

const uploadResponse = async (req, res) => {
  const { requestId } = req.body;
  const { designFile } = req.files;
  let response = "";

  if (!designFile) {
    throw new BadRequestError("No response design file was found");
  }
  const request = await Request.findOne({ _id: requestId });
  if (!request) {
    throw new NotFoundError("No request with id: " + requestId);
  }

  response = await useCloudinary(designFile, "image", "/Response", requestId);

  if (response && response.msg) {
    throw new CustomAPIError(response.msg);
  }

  request.design = response;
  request.status = "done";

  await request.save();

  res.status(StatusCodes.OK).json({ msg: "Uploaded Design" });
};

const getDesignHistory = async (req, res) => {
  let request;
  if (req.user.role === "admin") {
    request = await Request.find({ status: "done" }).populate("brand");
  } else {
    request = await Request.find({
      status: "done",
      designer: req.user.userId,
    }).populate("brand");
  }

  res.status(StatusCodes.OK).json(request);
};

module.exports = {
  createRequest,
  getBrandRequests,
  getMonthRequests,
  assignRequest,
  getAssignedRequest,
  acceptRequest,
  uploadResponse,
  getDesignHistory,
};
