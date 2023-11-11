require("express-async-errors");
require("dotenv").config();
require("https").globalAgent.options.rejectUnauthorized = false; // GoogleAuth
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const app = express();
// Middlewares
const errorMW = require("./middlewares/error-handler");
const notFoundMW = require("./middlewares/not-found");

app.use("/", express.static(path.join(__dirname, "public", "build")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("trust proxy", 1);
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(fileUpload({ useTempFiles: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
app.use(passport.session());

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/account", require("./routes/accountRoutes"));
app.use("/api/v1/brand", require("./routes/brandRoutes"));
app.use("/api/v1/request", require("./routes/requestRoutes"));
app.use("/api/v1/comment", require("./routes/commentRoutes"));
app.use("/api/v1/ticket", require("./routes/ticketRoutes"));

app.get("/health-check", (req, res) => {
  res.status(200).json({ msg: "Everything looks good" });
});

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});

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
