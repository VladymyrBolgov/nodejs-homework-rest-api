const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUser = require("./updateUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify")
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
    signup,
    login,
    getCurrent,
    logout,
    updateUser,
    updateAvatar,
    verify,
    resendVerifyEmail,
}