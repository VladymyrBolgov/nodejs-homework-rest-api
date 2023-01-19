const fs = require("fs/promises");
const path = require("path");
const  User  = require("../../models");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  
  await fs.rename(tempUpload, resultUpload);
  console.log(resultUpload)
  console.log(tempUpload)
    Jimp.read(resultUpload)
      .then((img) => {
          return img
              .resize(250, 250)
              .write(resultUpload);
      })
      .catch((error) => {
        throw error;
      });
    const avatarURL = path.join("public", "avatars", filename);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = updateAvatar;
