const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
// 2
const {nanoid} = require("nanoid")
// 2
const { User } = require("../../models");
// 3
const { sendEmail } = require("../../helpers/");
const {BASE_URL} = process.env;
// 3
const signup = async (req, res) => {
  const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict("Email in use");
  }
  
  const hashPassword = await bcrypt.hash(password, 10)
  const avatarURL = gravatar.url(email);
  // 4
  const verificationToken = nanoid();
  // 4
  const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});
 // 5 отправляем email
  const verifyEmail = {
    to: email,
    subject: "Verify you email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`
  };
  await sendEmail(verifyEmail);
// 5
  newUser.setPassword(password);
  newUser.save();
  
    res.status(201).json({
      status: "success",
      code: 201,
      message: "user created",
      data: {
        user: {
          email,
          subscription: newUser.subscription,
        },
      },
    });
  };
  
  module.exports = signup;