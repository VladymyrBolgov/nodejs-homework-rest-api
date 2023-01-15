const express = require("express");
const {validation, ctrlWrapper, auth, upload} = require("../../middlewares");
const {
    users: { signup, login, getCurrent, logout, updateUser, updateAvatar, verify, resendVerifyEmail },
} = require("../../controllers");
const { signupUserSchema, loginUserSchema, emailUserSchema} = require("../../schemas");
// const { verify } = require("jsonwebtoken");
 
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);
 const userEmailValidation = validation(emailUserSchema);

// signup
router.post("/signup", userSignupValidation, ctrlWrapper(signup));
// 6
 router.get("/verify/:verificationToken", ctrlWrapper(verify));
 router.post("verify", userEmailValidation, ctrlWrapper(resendVerifyEmail));
// 6
// signin
router.post("/login", userLoginValidation, ctrlWrapper(login));
router.get("/current", auth, ctrlWrapper(getCurrent));
router.post("/logout", auth, ctrlWrapper(logout));

router.patch("/users", auth, ctrlWrapper(updateUser)); 
router.patch("/avatars", auth, upload.single('avatar'), ctrlWrapper(updateAvatar))

module.exports = router;