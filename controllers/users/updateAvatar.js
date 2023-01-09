const fs = require("fs/promises");
const path = require("path");
const  User  = require("../../models/user");
const jimp = require("jimp");

console.log(User)

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);
    jimp.read(tempUpload)
        .then(avatar => {
            return avatar
                .resize(250, 250)
                .write(resultUpload)
        }
        )
        .catch((error) => console.log(error));

    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", filename);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    console.log(User)
    res.json({ avatarURL, });
};

module.exports = updateAvatar;