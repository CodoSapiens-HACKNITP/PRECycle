const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // get the token from the header
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({
      msg: "no token, auth denied",
    });
  }

  try {
    const decoded = jwt.verify(token, config.get("JWTsecret"));

    req.seller = decoded.seller;
    req.rider = decoded.rider;
    req.vendor = decoded.vendor;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "token is not valid",
    });
  }
};
