const sendEmail = require("./sendEmail");

const { BASE_URL } = process.env;

const sendContirmationEmail = async (email, verificationToken) => {

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`
      };
      await sendEmail(verifyEmail);
}
module.exports = sendContirmationEmail;