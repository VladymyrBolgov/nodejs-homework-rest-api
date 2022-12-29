const express = require("express");
const {validation, ctrlWrapper, auth} = require("../../middlewares");
const {
    users: { signup, login, getCurrent, logout },
} = require("../../controllers");
const { signupUserSchema, loginUserSchema } = require("../../schemas");
 
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);

router.post("/signup", userSignupValidation, ctrlWrapper(signup));
router.post("/login", userLoginValidation, ctrlWrapper(login));
router.get("/current", auth, ctrlWrapper(getCurrent));
router.get("/logout", auth, ctrlWrapper(logout));

module.exports = router;