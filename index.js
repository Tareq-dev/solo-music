const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());
const port = process.env.PORT || 5000;
require("dotenv").config();

const Router = require("./routes/Routes.js");
const { connect } = require("./utils/dbConfig.js");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
connect();

app.use("/music", Router);
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Running Form solo music");
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
