const express = require('express')

const {
  contacts: {
  getContacts,
  getContactById,
  addNewContact,
  deleteContact,
  updateContact,
  updateContactFavorite,
  },
} = require("../../controllers");
 
const { validation, ctrlWrapper } = require("../../middlewares");
const {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
} = require("../../schemas");

const contactCreateValidation = validation(createContactSchema);
const contactUpdateValidation = validation(updateContactSchema);
const contactFavoriteValidation = validation(contactFavoriteSchema);
const router = express.Router();

router.get('/', ctrlWrapper(getContacts));
router.get('/:Id', ctrlWrapper(getContactById));
router.delete('/:Id', ctrlWrapper(deleteContact));

router.post('/', contactCreateValidation, ctrlWrapper(addNewContact));

router.put('/:Id', contactUpdateValidation, ctrlWrapper(updateContact));

router.patch("/:id/favorite",
  contactFavoriteValidation,
  ctrlWrapper(updateContactFavorite)
);

module.exports = router;
