const { attachCookieToResponse } = require("../utils/jwt");

const googleLogin = async (req, res) => {
  attachCookieToResponse(res, req.user);
  const { name, email, avatar, role, userId } = req.user;
  res.redirect(
    `${process.env.DOMAIN}google?name=${name}&email=${email}&avatar=${avatar}&role=${role}&userId=${userId}`
  );
};

module.exports = { googleLogin };
