const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customErr = {
    statusCode: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message ||
      "Something went wrong, Our engineers are currently working on it",
  };

  console.log(err);
  res.status(customErr.statusCode).json({ msg: customErr.msg });
};

module.exports = errorHandlerMiddleware;
