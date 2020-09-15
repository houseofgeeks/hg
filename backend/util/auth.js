const jwt = require('jsonwebtoken');

module.exports = function authenticateJWT (req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403).json({
          message: "Token tampred"
        });
      }
      next();
    });
  } else {
    res.sendStatus(401).json({
      message: "Token not found",
    });
  }
};
