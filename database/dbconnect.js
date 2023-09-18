import mongoose from "mongoose";
import env from "dotenv";

env.config();
const dbconnection = async () => {
  mongoose
    .connect(process.env.COSMOS_DB_URL)
    .then(() => console.log("Connection to CosmosDB successful"))
    .catch((err) => console.error(err));
};
export default dbconnection;
