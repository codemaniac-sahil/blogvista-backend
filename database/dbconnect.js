const mongoose = require("mongoose");
const env = require("dotenv");

env.config();
const dbconnection = async () => {
  mongoose.set("strictQuery", false);
  const URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("you got this ", error);
  }
};
module.exports = dbconnection;
