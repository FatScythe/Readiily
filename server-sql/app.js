require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");

const app = express();

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
