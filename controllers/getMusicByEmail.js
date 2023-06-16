const { connect } = require("../utils/dbConfig");

module.exports.getMusicByEmail = async (req, res, next) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const db = await connect();
    const cursor = await db.collection("music").find(query);
    const result = await cursor.toArray();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
