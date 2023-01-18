const { User } = require("../../models");

const { HttpError, sendConfirmationEmail } = require("../../helpers");

const resendVerifyEmail = async(req, res)=> {
    const {email} = req.body;
    const user = await User.findOne({email});
    
    if (!user || user.verify) {
        throw HttpError(404)
    }

    await sendConfirmationEmail(email, user.verificationToken)

    res.json({
        status: "succes",
        code: 200,
        message: "Verify email resend"
    })
}

module.exports = resendVerifyEmail;
