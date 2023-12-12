const express = require("express");
const app = express();
const env = require("dotenv").config();
const PORT = process.env.PORT;
const userRouter = require("./routes/signup.route");

app.use("/user",userRouter );
app.listen(PORT, () => {
  console.log(`APP LISTEN ON PORT ${PORT}`);
});
