const { Conflict } = require("http-errors");
const { User } = require("../../models");

const bcrypt = require("bcrypt");
const gravatar = require("gravatar")

const signup = async (req, res) => {

  const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict("Email in use");
  }
  
  const avatarURL = gravatar.url(email);
  const hashPassword = await bcrypt.hash(password, 10)
 
  const newUser = await User.create({...req.body, password: hashPassword, avatarURL});
 
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