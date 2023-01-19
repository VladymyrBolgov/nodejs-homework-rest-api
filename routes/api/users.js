const express = require("express");
const {
    auth,
    upload,
    validation,
    ctrlWrapper,
} = require("../../middlewares");
const {
    users: {
        login,
        logout,
        verify,
        signup,
        updateUser,
        getCurrent,
        updateAvatar,
        resendVerifyEmail },
} = require("../../controllers");
const {
    loginUserSchema,
    emailUserSchema,
    signupUserSchema,
} = require("../../schemas");

const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);
const userEmailValidation = validation(emailUserSchema);

router.post("/signup", userSignupValidation, ctrlWrapper(signup));

router.get("/verify/:verificationToken", ctrlWrapper(verify));
router.post("/verify", userEmailValidation, ctrlWrapper(resendVerifyEmail));

router.post("/login", userLoginValidation, ctrlWrapper(login));
router.get("/current", auth, ctrlWrapper(getCurrent));
router.post("/logout", auth, ctrlWrapper(logout));

router.patch("/users", auth, ctrlWrapper(updateUser)); 
router.patch("/avatars", auth, upload.single('avatar'), ctrlWrapper(updateAvatar))

module.exports = router;