const { Contact } = require("../../models");

const updatedContactFavorite = async (req, res, next) => {
    const { id } = req.params;
    const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(
        id,
        { favorite },
        { new: true }
    );
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        },
    });
};

module.exports = updatedContactFavorite;