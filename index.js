import express from "express";
import dbconnection from "./database/dbconnect.js";
import authRoute from "./routes/authRoutes.js";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRoute.js";

import cookieParser from "cookie-parser";
const PORT = 8000;
dbconnection();
const app = express();
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", authRoute);
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
