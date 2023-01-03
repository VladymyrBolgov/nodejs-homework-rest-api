const {Contact} = require("../../models")

const getContacts = async (req, res, next) => {
  const { _id } = req.user;
  
  const {page = 1, limit = 10, favorite} = req.query;
  const skip = (page - 1) * limit;

  let findOptions = {};

  if (favorite) {
    if (favorite === "true" || favorite === "1") {
      findOptions = {
        favorite: true,
      };
    }
    if (favorite === "false" || favorite === "0") {
      findOptions = {
        favorite: false,
      };
    }
  }
  

  const contacts = await Contact.find({ owner: _id, ...findOptions }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit)
  }).populate("owner", "name email");

  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getContacts;