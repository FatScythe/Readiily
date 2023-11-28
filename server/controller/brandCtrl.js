const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
  CustomAPIError,
} = require("../errors/index");
const Brand = require("../model/Brand");
const checkPermissions = require("../utils/checkPermissions");
const useCloudinary = require("../utils/useCloudinary");

const createBrand = async (req, res) => {
  let { name, colors, font, website, socials, industry, email } = req.body;
  let logoLight = "",
    logoDark = "",
    fontUrl = "";

  if (!name || !email) {
    throw new BadRequestError("Please provide brand name and email");
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
      if (logoLight && logoLight.msg) {
        throw new CustomAPIError(logoLight.msg);
      }
    }
    if (darkFile) {
      logoDark = await useCloudinary(
        darkFile,
        "image",
        "/Brands/" + name,
        "darklogo"
      );
      if (logoDark && logoDark.msg) {
        throw new CustomAPIError(logoDark.msg);
      }
    }
    if (fontFile) {
      fontUrl = await useCloudinary(
        fontFile,
        "font",
        "/Brands/" + name,
        "font"
      );
      if (fontUrl && fontUrl.msg) {
        throw new CustomAPIError(fontUrl.msg);
      }
    }
  }

  await Brand.create({
    name,
    colors: colors ? JSON.parse(colors) : [],
    font,
    email,
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

const getBrand = async (req, res) => {
  const { id } = req.params;

  const brand = await Brand.findOne({ _id: id });

  if (!brand) {
    throw new NotFoundError("No brand with id: " + id);
  }

  res.status(StatusCodes.OK).json(brand);
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
  let { name, colors, font, website, socials, email, industry } = req.body;
  let logoLight = "",
    logoDark = "",
    fontUrl = "";

  const brand = await Brand.findOne({ _id: brandId });

  if (!brand) {
    throw new NotFoundError("No brand with id: " + brandId);
  }

  checkPermissions(req.user, brand.account);

  if (!name || !email) {
    throw new BadRequestError("Please provide brand name and email");
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
      email,
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

module.exports = { createBrand, getBrands, getBrand, deleteBrand, editBrand };
