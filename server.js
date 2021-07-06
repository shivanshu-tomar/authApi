const express = require("express");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
var app = express();

//routes
app.use(express.json());
app.use("/api/user", authRoutes);

// connect to db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch(() => console.log("error to connect to db"));

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
