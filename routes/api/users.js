const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const {
    users: { signup },
} = require("../../controllers");
  
const { signupUserSchema, loginUserSchema } = require("../../schemas");
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const loginUserValidation = validation(loginUserSchema);

router.post("/signup", userSignupValidation, ctrlWrapper(signup));

module.exports = router;