const {
    createContactSchema,
    updateContactSchema,
    contactFavoriteSchema,
  } = require("./contacts");
  
  const { signupUserSchema, loginUserSchema, emailUserSchema } = require("./user");
  
  module.exports = {
    createContactSchema,
    updateContactSchema,
    contactFavoriteSchema,
    signupUserSchema,
    loginUserSchema,
    emailUserSchema,
  };