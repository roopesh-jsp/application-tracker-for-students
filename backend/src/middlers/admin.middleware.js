import jwt from "jsonwebtoken";

export const adminAuthMiddleware = (req, res, next) => {
  // Get token from headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided, authorization denied",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the token has isAdmin set to true
    if (!decoded.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Admin privileges required",
      });
    }

    // Store admin info in req.user and proceed
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token is not valid",
    });
  }
};
``;
