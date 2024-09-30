const JWT = require("jsonwebtoken");

const TokenGenerator = async (user) => {
  const token = JWT.sign(
    {
      userid: user.userid,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

const TokenAuthenticator = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token is missing." });
  }
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = { TokenGenerator, TokenAuthenticator };
