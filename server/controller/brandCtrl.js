const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");
const cloudinary = require("cloudinary");
const fs = require("fs");
const Brand = require("../model/Brand");
const checkPermissions = require("../utils/checkPermissions");

const useCloudinary = async (
  file,
  mimetype = "image",
  folder,
  public_id,
  maxSize = process.env.MAX_SIZE
) => {
  try {
    if (!file.mimetype.startsWith(mimetype)) {
      throw new BadRequestError("Please provide " + mimetype);
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
    console.error(error);
    return "";
  }
};

const createBrand = async (req, res) => {
  let { name, colors, font, website, socials, industry } = req.body;
  let logoLight = "",
    logoDark = "",
    fontUrl = "";

  if (!name) {
    throw new BadRequestError("Please provide brand name");
  }

  if (req.files) {
    const { lightFile, darkFile, fontFile } = req.files;
    if (lightFile) {
      logoLight = await useCloudinary(
        lightFile,
        "image",
        "/Brands/" + name,
        "lightlogo"
      );
    }
    if (darkFile) {
      logoDark = await useCloudinary(
        darkFile,
        "image",
        "/Brands/" + name,
        "darklogo"
      );
    }
    if (fontFile) {
      fontUrl = await useCloudinary(
        fontFile,
        "font",
        "/Brands/" + name,
        "font"
      );
    }
  }

  await Brand.create({
    name,
    colors: colors ? JSON.parse(colors) : [],
    font,
    socials: socials ? JSON.parse(socials) : [],
    fontUrl,
    website,
    industry: industry ? JSON.parse(industry) : [],
    logoLight,
    logoDark,
    account: req.user.userId,
  });

  res.status(StatusCodes.CREATED).send({ msg: "Brand created" });
};

const getBrands = async (req, res) => {
  let brands;
  let count;
  if (req.user.role === "admin") {
    brands = await Brand.find({});
    count = await Brand.countDocuments({});
  } else {
    brands = await Brand.find({ account: req.user.userId });
    count = await Brand.countDocuments({ account: req.user.userId });
  }

  res.status(StatusCodes.OK).json({ nb: count, brands });
};

const deleteBrand = async (req, res) => {
  const { id: brandId } = req.params;

  const brand = await Brand.findOne({ _id: brandId });

  if (!brand) {
    throw new NotFoundError("No brand with id: " + brandId);
  }

  checkPermissions(req.user, brand.account);

  await brand.deleteOne();

  res.status(StatusCodes.OK).json({ msg: `${brand.name} has been deleted` });
};

const editBrand = async (req, res) => {
  const { id: brandId } = req.params;
  let { name, colors, font, website, socials, industry } = req.body;
  let logoLight = "",
    logoDark = "",
    fontUrl = "";

  const brand = await Brand.findOne({ _id: brandId });

  if (!brand) {
    throw new NotFoundError("No brand with id: " + brandId);
  }

  checkPermissions(req.user, brand.account);

  if (!name) {
    throw new BadRequestError("Please provide brand name");
  }

  if (req.files) {
    const { lightFile, darkFile, fontFile } = req.files;
    if (lightFile) {
      logoLight = await useCloudinary(
        lightFile,
        "image",
        "/Brands/" + name,
        "lightlogo"
      );
    }
    if (darkFile) {
      logoDark = await useCloudinary(
        darkFile,
        "image",
        "/Brands/" + name,
        "darklogo"
      );
    }
    if (fontFile) {
      fontUrl = await useCloudinary(
        fontFile,
        "image", // Change to tff
        "/Brands/" + name,
        "font"
      );
    }
  }

  await Brand.findOneAndUpdate(
    { _id: brandId },
    {
      name,
      colors: colors ? JSON.parse(colors) : [],
      font,
      socials: socials ? JSON.parse(socials) : [],
      fontUrl,
      website,
      industry: industry ? JSON.parse(industry) : [],
      logoLight,
      logoDark,
      account: req.user.userId,
    },
    { new: true, runvalidators: true }
  );
  res.status(StatusCodes.OK).json({ msg: "Brand updated" });
};

module.exports = { createBrand, getBrands, deleteBrand, editBrand };
