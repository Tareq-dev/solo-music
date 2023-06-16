const express = require("express");
const { postMusics } = require("../controllers/postMusic.js");
const { getMusic } = require("../controllers/getMusic.js");
const { deleteMusic } = require("../controllers/deleteMusic.js");
const router = express.Router();
const { getMusicByEmail } = require("../controllers/getMusicByEmail.js");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/audios")) {
      fs.mkdirSync("public/audios");
    }
    cb(null, "public/audios");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (
      ext !== ".mp3"
      //   ext !== ".mvk" &&
      //   ext !== ".jpeg" &&
      //   ext !== ".jpg" &&
      //   ext !== ".png"
    ) {
      const error = new Error("File type is not supported");
      cb(error, false);
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
