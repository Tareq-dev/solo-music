const { connect } = require("../utils/dbConfig");
// const cloudinary = require("../lib/cloudinary");

module.exports.postMusics = async (req, res) => {
  console.log(req.file);
  // cloudinary.uploader.upload(
  //   req.file.path,
  //   {
  //     resouce_type: "audio",
  //     folder: "audio",
  //   },
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     const upload = new upload({
  //       name: req.file.originalname,
  //       url: result.url,
  //       cloudinary_id: result.public_id,
  //     });
  //     console.log(upload)
  //     console.log("result1", result);
  //     upload.save((err, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       console.log("result2", result);
  //     });
  //   }
  // );
  const file = req.file;
  const body = req.body;
  const addedMusic = {
    title: body.title,
    artist: body.artist,
    audio: file?.filename,
    email: body.email,
  };
  console.log(addedMusic);
  const db = await connect();
  const result = await db.collection("music").insertOne(addedMusic);
  if (result) {
    return res.send({ success: true, result });
  }
};
