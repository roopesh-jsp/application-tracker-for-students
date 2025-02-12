import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Import the User model

export const authMiddleware = async (req, res, next) => {
  // Get the token from the request headers (usually sent as 'Authorization: Bearer <token>')
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Check if no token was provided
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied, no token provided" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the ID stored in the token
    const user = await User.findById(decoded.userId).select("-password"); // Exclude the password from the user object

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Store the user object in req.user
    req.user = user;

    // Call next middleware or route handler
    next();
  } catch (error) {
    // If the token is invalid, return an error response
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
