require("express-async-errors");
require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const errorMW = require("./middlewares/error-handler");
const notFoundMW = require("./middlewares/not-found");

app.get("/health-check", (req, res) => {
  res.status(200).json({ msg: "OK" });
});
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.use(errorMW);
app.use(notFoundMW);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is listening on port: " + PORT);
  } catch (error) {
    console.log("Cannot connect to database");
  }
});
