const { StatusCodes } = require("http-status-codes");
const Request = require("../model/Request");
const useCloudinary = require("../utils/useCloudinary");

const createRequest = async (req, res) => {
  let { desc, date, brand } = req.body;
  let image = "";
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

  await Request.create({
    desc,
    date,
    brand,
    account: req.user.userId,
    image,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Request as been scheduled" });
};

module.exports = { createRequest };
