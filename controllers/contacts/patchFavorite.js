const createError = require('http-errors');
const { Contact } = require("../../model");

const patchFavorite = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const { favorite } = req.body;

        const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
        
        if (!result) {
            throw createError(404, `UPS! Contact with id=${contactId} not found`);
        }
        
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            },
        });
    } catch (error) {
        next(error);
    } 
};

module.exports = patchFavorite;