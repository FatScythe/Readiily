const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const Comment = require("../model/Comment");
const Request = require("../model/Request");

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

module.exports = { createComment };
