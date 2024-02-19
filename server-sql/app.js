require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { sequelize } = require("./models");
const BadRequestError = require("../server/errors/badrequest-error");

const app = express();

app.get("/health-check", (req, res) => {
  res.status(200).json({ msg: "Everything is good!" });
});

app.use(require("./middlewares/error-handler"));
app.use(require("./middlewares/not-found"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  try {
    console.log("App is listening on port: " + PORT);
    sequelize.authenticate();
    console.log("Connected to DB");
  } catch (error) {
    console.log("Couldn't connect to DB");
  }
});
