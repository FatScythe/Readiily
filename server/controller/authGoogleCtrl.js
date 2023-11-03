const { attachCookieToResponse } = require("../utils/jwt");

const googleLogin = async (req, res) => {
  attachCookieToResponse(res, req.user);
  res.redirect("http://localhost:3000/dashboard");
};

module.exports = { googleLogin };
