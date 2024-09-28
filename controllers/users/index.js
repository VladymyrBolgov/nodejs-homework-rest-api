const login = require("./login");
const signup = require("./signup");
const logout = require("./logout");
const verify = require("./verify");
const getCurrent = require("./getCurrent");
const updateUser = require("./updateUser");
const updateAvatar = require("./updateAvatar");
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
    login,
    signup,
    logout,
    verify,
    getCurrent,
    updateUser,
    updateAvatar,
    resendVerifyEmail,
}