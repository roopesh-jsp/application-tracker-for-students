// import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Application from "../models/applications.model.js";

// Admin login controller
export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide email and password" });
  }

  console.log(process.env.ADMIN_MAIL, process.env.ADMIN_PASS);

  // Compare email and password with .env values
  if (email === process.env.ADMIN_MAIL && password === process.env.ADMIN_PASS) {
    // Create a token for the admin
    const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
};

// Controller to update the status of an application
export const updateApplicationStatus = async (req, res) => {
  const { status, applicationId } = req.body; // New status from request body

  // Validate the status input
  if (!["pending", "accepted", "rejected"].includes(status)) {
    return res.status(400).json({
      success: false,
      message:
        "Invalid status. Allowed statuses are pending, accepted, and rejected.",
    });
  }

  try {
    // Find the application by its ID
    const application = await Application.findById(applicationId);

    // If the application is not found, return a 404 response
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Update the status of the application
    application.status = status;
    await application.save(); // Save the updated application

    // Return a success response with the updated application
    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application,
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
