const {Contact} = require("../../models")

const getContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const {page = 1, limit = 10} = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({owner}, "-createdAt -updatedAt", {skip, limit})
  .populate("owner", "name email");

  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getContacts;