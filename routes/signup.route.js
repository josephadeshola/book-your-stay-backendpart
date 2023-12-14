const express = require("express");
const router = express.Router();
const { signupUser, signinUser, home } = require("../controllers/signup.controller");

router.post("/register", signupUser);
router.post("/login" , signinUser )
router.get("/" , home)

module.exports= router;
