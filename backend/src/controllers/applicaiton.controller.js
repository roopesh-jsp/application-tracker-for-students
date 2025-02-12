import Application from "../models/applications.model.js"; // Importing from application.model.js
import User from "../models/user.model.js"; // Importing from user.model.js

// Controller to create a new application
export const createApplication = async (req, res) => {
  const { program_name, university } = req.body;

  try {
    // Find the user by ID (req.user is available from the authMiddleware)
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (!program_name || !university) {
      return res.status(400).json({
        success: false,
        message:
          "All fields (program_name, university, and status) are required",
      });
    }
    // Create a new application linked to the user
    const newApplication = new Application({
      program_name,
      university,
      status: "pending",
      student: user._id, // Reference the current logged-in user
    });

    // Save the application to the database
    const savedApplication = await newApplication.save();

    // Add the application to the user's list of applications
    user.applications.push(savedApplication._id);
    await user.save();

    // Return success response with the created application
    res.status(201).json({
      success: true,
      message: "Application created successfully",
      application: savedApplication,
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ success: false, message: "Server error" });
    console.log(error);
  }
};
