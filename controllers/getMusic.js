const { connect } = require("../utils/dbConfig");

module.exports.getMusic = async (req, res, next) => {
  try {
    const db = await connect();
    const result = await db.collection("music").find().toArray();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
