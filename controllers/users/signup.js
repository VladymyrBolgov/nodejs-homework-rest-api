const { Conflict } = require("http-errors");
const { User } = require("../../models");

const bcript = require("bcryptjs");
const gravatar = require("gravatar")

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  // const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict("Email in use");
  }
  
  const avatarURL = gravatar.url(email);
  const hashPassword = bcript.hashSync(password, bcript.genSaltSync(10));
  const newUser = await User.create({ email, password: hashPassword, subscription, avatarURL });
  
  // const newUser = new User({ email, subscription });
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