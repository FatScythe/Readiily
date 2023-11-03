const router = require("express").Router();
const { showMe } = require("../controller/accountCtrl");
const { authenticateAccount } = require("../middlewares/authentication");

router.get("/showMe", authenticateAccount, showMe);

module.exports = router;
