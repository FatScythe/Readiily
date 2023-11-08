const { BadRequestError } = require("../errors/index");
const cloudinary = require("cloudinary");
const fs = require("fs");

const useCloudinary = async (
  file,
  mimetype = "image",
  folder,
  public_id,
  maxSize = process.env.MAX_SIZE
) => {
  try {
    if (!file.mimetype.startsWith(mimetype)) {
      throw new BadRequestError("Please provide " + mimetype + " file");
    }
    if (file.size > maxSize) {
      throw new BadRequestError(
        `${mimetype} size must not be larger than 3 MB`
      );
    }
    const options = {
      use_filename: true,
      folder: "Readiily" + folder,
      public_id,
      unique_filename: false,
      overwrite: true,
      resource_type: "auto",
    };
    const result = await cloudinary.v2.uploader.upload(
      file.tempFilePath,
      options
    );
    fs.unlinkSync(file.tempFilePath);

    return result.secure_url;
  } catch (error) {
    return {
      status: error.statusCode || 500,
      msg:
        error.message || "Something went wrong while uploading to cloudinary",
    };
  }
};

module.exports = useCloudinary;
