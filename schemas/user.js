const Joi = require("joi");

const user = {
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
};

const signupUserSchema = Joi.object({
    name: user.name,
    email: user.email,
    password: user.password,
}).required();
  
const loginUserSchema = Joi.object({
    name: user.name.optional,
    email: user.email,
    password: user.password,
}).required();
  
module.exports = {
    signupUserSchema,
    loginUserSchema,
  };