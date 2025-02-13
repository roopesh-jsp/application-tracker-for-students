import User from "../models/user.model.js"; // Import the User model
import jwt from "jsonwebtoken"; // Import JWT for generating tokens

// Controller for User Signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }
    // Create a new user
    user = new User({
      name,
      email,
      password, // No need to hash here, the pre-save hook handles it
    });

    // Save the user to the database
    await user.save();

    console.log(process.env.JWT_SECRET);

    // Create and sign a JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "haii",
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ success: true, token, userId: user._id });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log(error);
  }
};

// Controller for User Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("login...");

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ success: true, token, userId: user._id });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
