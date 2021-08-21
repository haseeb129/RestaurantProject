const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
mongoose
  .connect("mongodb://localhost:27017/RestaurantProject", {
    useNewUrlParser: true,
  })
  .then((res) => console.log("Connected to MongoDb"))
  .catch((err) => console.log("MongoDb connection Error", err));

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("ok2");

const menuRoute = require("./api/routes/menu");
const authRoute = require("./api/routes/auth");

app.use("/menu", menuRoute);
app.use("/auth", authRoute);

app.use("/hello", (req, res, next) => {
  console.log("ok");
  res.status(200).json({
    message: "hello world",
  });
});

module.exports = app;
