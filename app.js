const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();

//import routes
const userRoute = require("./controller/user");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "./uploads")));
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//user routes
app.use("/api/user", userRoute);

//ErrorHandling
app.use(ErrorHandler);

module.exports = app;
