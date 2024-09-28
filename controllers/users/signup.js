const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const {nanoid} = require("nanoid")
const { User } = require("../../models");
const {sendConfirmationEmail} = require("../../helpers")

const signup = async (req, res) => {
  const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict("Email in use");
  }
  
  const hashPassword = await bcrypt.hash(password, 10)
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  
  const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});
 
  await sendConfirmationEmail(email, verificationToken)

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