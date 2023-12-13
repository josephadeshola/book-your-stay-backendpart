const express = require("express");
const router = express.Router();
const { signupUser, signinUser } = require("../controllers/signup.controller");

router.post("/register", signupUser);
router.post("/login" , signinUser )

module.exports= router;
