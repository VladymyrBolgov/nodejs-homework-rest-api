const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const {
    users: { signup, login },
} = require("../../controllers");
  
const { signupUserSchema, loginUserSchema } = require("../../schemas");
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);

router.post("/signup", userSignupValidation, ctrlWrapper(signup));
router.post("/login", userLoginValidation, ctrlWrapper(login));

module.exports = router;