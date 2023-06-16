const { connect } = require("../utils/dbConfig");

module.exports.deleteMusic = async (req, res, next) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const db = await connect();
    const result = await db.collection("music").deleteOne(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
