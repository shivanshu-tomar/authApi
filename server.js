const express = require("express");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conneted to Db");
  }
);
var app = express();
app.use("/api/user", authRoutes);
app.get("/", (req, res) => {
  res.send("this is wor");
});
app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
