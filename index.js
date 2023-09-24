const express = require("express");
const dbconnection = require("./database/dbconnect");
const authRoute = require("./routes/authRoutes.js");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute.js");
const blogRoute = require("./routes/blogRoute.js");
const cookieParser = require("cookie-parser");
const cors=require('cors');
const PORT = 8000;
dbconnection();
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", authRoute);
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
