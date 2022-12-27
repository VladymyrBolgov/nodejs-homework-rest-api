const { Contact } = require("../../model");
const createError = require("http-errors");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const result = await Contact.findById(contactId);
    if (!result) {
      throw createError(404, `UPS...Contact with id=${contactId} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error);
  }
};

module.exports = getById;