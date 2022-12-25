const Joi = require("joi");

const user = {
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string().required(),
    token: Joi.boolean().default("false").optional(),
};

const createUserSchema = Joi.object({
    password: user.password,
    email: user.email,
    subscription: user.subscription,
    token: user.token,
}).required();

const updateUserSchema = Joi.object({
    password: user.password.optional(),
    email: user.email.optional(),
    subscription: user.subscription.optional(),
    token: user.token,
}).required();
  
const userTokenSchema = Joi.object({
    token: user.token.required(),
  });

module.exports = {
    createUserSchema,
    updateUserSchema,
    userTokenSchema,
};