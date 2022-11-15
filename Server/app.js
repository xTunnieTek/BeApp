const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require('./routes/userRoutes');
const swipeRoutes = require('./routes/swipeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

app.use("/users",userRoutes);
app.use("/swipe",swipeRoutes);

module.exports = app;