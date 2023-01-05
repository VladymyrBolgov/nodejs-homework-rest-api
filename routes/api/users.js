const express = require("express");
const {validation, ctrlWrapper, auth, upload} = require("../../middlewares");
const {
    users: { signup, login, getCurrent, logout, updateUser, updateAvatar },
} = require("../../controllers");
const { signupUserSchema, loginUserSchema } = require("../../schemas");
 
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);

router.post("/signup", userSignupValidation, ctrlWrapper(signup));
router.post("/login", userLoginValidation, ctrlWrapper(login));
router.get("/current", auth, ctrlWrapper(getCurrent));
router.post("/logout", auth, ctrlWrapper(logout));

// это доделать, возможно переделать updateUser на updateAvatar
router.patch("/users", auth, ctrlWrapper(updateUser));

router.patch("/avatars", auth, upload.single('avatar'), ctrlWrapper(updateAvatar))

module.exports = router;