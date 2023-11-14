const Request = require("../model/Request");
const Comment = require("../model/Comment");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createComment = async (req, res) => {
  const { comment, brandId, requestId, date } = req.body;

  if (!comment) {
    throw new BadRequestError("Please provide a comment");
  }

  if (!date) {
    throw new BadRequestError("Please provide the request date");
  }

  if (!brandId || !requestId) {
    throw new BadRequestError("Please provide brand and request id");
  }

  const request = await Request.findOne({
    brand: brandId,
    date: new Date(date).toISOString(),
  });

  if (!request) {
    throw new NotFoundError("No request with id: " + requestId);
  }

  request.accepted = false;
  await request.save();

  await Comment.create({ comment, brand: brandId, request: requestId });
  res.status(StatusCodes.CREATED).json({ msg: "Comment as been added" });
};

const getBrandComments = async (req, res) => {
  const { id: brandId } = req.params;

  const date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  const comments = await Comment.find({
    brand: brandId,
    createdAt: {
      $gte: new Date(currentYear, currentMonth, -6).toISOString(), // 6 days b4 month
      $lt: new Date(currentYear, currentMonth, 36).toISOString(), // 6 or 7 days after month
    },
  }).populate("request");

  res.status(StatusCodes.OK).json({
    nb: comments.length,
    comments,
  });
};

module.exports = { createComment, getBrandComments };
