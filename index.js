const express = require("express");
const app = express();
const env = require("dotenv").config();
const PORT = process.env.PORT;
const URI = process.env.URI;
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/signup.route");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/user", userRouter);

mongoose
  .connect(URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.listen(PORT, () => {
  console.log(`APP LISTEN ON PORT ${PORT}`);
});
