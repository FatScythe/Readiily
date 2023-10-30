const { BadRequestError, UnauthorizedError } = require("../errors");
// const { isTokenValid } = require("../utils/jwt");

const authenticateAccount = async (req, res, next) => {
  try {
    passport.authenticate("local", {
      successRedirect: "/health-check",
      failureRedirect: "/health-check",
    });
  } catch (error) {
    throw new BadRequestError("Invalid Credentials");
  }

  //   const token = req.signedCookies.token;

  //   try {
  //     if (!token) {
  //       throw new BadRequestError("Invalid Credentials");
  //     }
  //     const { name, role, userId, email, avatar } = isTokenValid(token);
  //     req.user = { name, role, userId, email, avatar };

  //     next();
  //   } catch (error) {
  //     throw new BadRequestError("Invalid Credentials");
  //   }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new UnauthorizedError("Unauthorized to access the resource(s)");
    next();
  };
};

module.exports = {
  authenticateAccount,
  authorizePermissions,
};
