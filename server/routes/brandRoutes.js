const router = require("express").Router();
const {
  createBrand,
  editBrand,
  getBrands,
  getBrand,
  deleteBrand,
} = require("../controller/brandCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router
  .route("/")
  .post(authenticateAccount, createBrand)
  .get(authenticateAccount, getBrands);

router
  .route("/:id")
  .get(authenticateAccount, getBrand)
  .patch(authenticateAccount, editBrand)
  .delete(authenticateAccount, deleteBrand);

module.exports = router;
