const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../middlewares");

const {
  registrationController,
  loginController,
  subscriptionController,
} = require("../../controllers/auth/auth");

const {
  signUpValidation,
  loginValidation,
  logoutValidation,
  currentUserValidation,
  subscriptionValidation,
} = require("../../schemas/user");

router.post("/signup", signUpValidation, ctrlWrapper(registrationController));
router.post("/login", loginValidation, ctrlWrapper(loginController));
router.get("/logout", logoutValidation);
router.get("/current", currentUserValidation);
router.patch("/", subscriptionValidation, subscriptionController);

module.exports = {authRouter: router};