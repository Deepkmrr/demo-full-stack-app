const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;
  const secertKey = "secertKey";
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, secertKey, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }

      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing in request");
    }
  }
};

module.exports = verifyToken;
