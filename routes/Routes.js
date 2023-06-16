const express = require("express");
const { postMusics } = require("../controllers/postMusic.js");
const { getMusic } = require("../controllers/getMusic.js");
const { deleteMusic } = require("../controllers/deleteMusic.js");
const router = express.Router();
const { getMusicByEmail } = require("../controllers/getMusicByEmail.js");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
// const storage = require("../lib/multer.js");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "https://solo-music.vercel.app/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("https://solo-music-six.vercel.app/public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("https://solo-music-six.vercel.app/public/audios")) {
      fs.mkdirSync("https://solo-music-six.vercel.app/public/audios");
    }
    cb(null, "https://solo-music-six.vercel.app/public/audios");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    console.log(ext);
    if (
      ext !== ".mp3"
      //   ext !== ".mvk" &&
      //   ext !== ".jpeg" &&
      //   ext !== ".jpg" &&
      //   ext !== ".png"
    ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
router.get("/", getMusic);
router.get("/:email", getMusicByEmail);
router.delete("/:id", deleteMusic);

router.post("/upload_music", upload.single("file"), postMusics);

module.exports = router;
