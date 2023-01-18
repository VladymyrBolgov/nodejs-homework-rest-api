// 10 проверяет и повторно отправляет письмо
const { User } = require("../../models");

const { HttpError, sendEmail } = require("../../helpers");
const {BASE_URL} = process.env;

const resendVerifyEmail = async(req, res)=> {
    const {email} = req.body;
    const user = await User.findOne({email});
    
    if (!user || user.verify) {
        throw HttpError(404)
    }
// если не подтвержден email, отправляем повторно
    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`
    };

    await sendEmail(verifyEmail);

    res.json({
        status: "succes",
        code: 200,
        message: "Verify email resend"
    })
}

module.exports = resendVerifyEmail;
