const {
    createContactSchema,
    updateContactSchema,
    contactFavoriteSchema,
  } = require("./contacts");
  
  const { signupUserSchema, loginUserSchema, emailUserSchema } = require("./user");
  
module.exports = {
  loginUserSchema,
  emailUserSchema,
  signupUserSchema,
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
  };