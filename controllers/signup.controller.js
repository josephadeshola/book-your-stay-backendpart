const userModel = require("../models/signup.model");
const bcryptjs = require("bcryptjs");
const signupUser = (req, res) => {
  let users = new userModel(req.body);
  users
    .save()
    .then((savedUser) => {
      console.log(savedUser, "saved");
      res
        .status(201)
        .json({ status: true, message: "User saved successfully" });
    })
    .catch((err) => {
      console.error(err, "error");
      if (err.code === 11000) {
        res
          .status(409)
          .json({ status: false, message: "Email already exists" });
      } else {
        res
          .status(500)
          .json({
            status: false,
            message: "server error ",
          });
      }
    });
};

const signinUser = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((result) => {
      console.log("good result", result);
      if (result) {
        bcryptjs.compare(password, result.password, (err, response) => {
          if (response) {
            console.log(response);
            res.status(201).json({ status: true, message: "Login Successful" });
          } else {
            console.log(err);
            res.json({ status: false, message: "Incorrect Password" });
          }
        });
      } else {
        console.log("dad request", result);
        res.json({ status: false, message: "Incorrect Email or Password" });
      }
    })
    .catch((err) => {
      console.log("bad", err);
      res.json({ status: false, message: "Internal Server Error" });
    });
};
const home = (req,res) =>{
  res.send('welcome ay')
}

module.exports = { signupUser, signinUser, home };
