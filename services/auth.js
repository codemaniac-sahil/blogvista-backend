const env = require("dotenv");

const jwt = require("jsonwebtoken");
env.config();

const secret = process.env.TOKEN_KEY;

function verifyToken(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Token not provided" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
}
module.exports = verifyToken;
