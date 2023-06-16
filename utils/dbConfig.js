const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
let db = null;

async function connect() {
  if (db) return db;
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db("form");
    console.log("connect");

    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB database", error);
  }
}

module.exports = { connect };
