const express = require("express");
const router = express.Router();
const { signupUser } = require("../controllers/signup.controller");

router.get("/register", signupUser);

module.exports= router
