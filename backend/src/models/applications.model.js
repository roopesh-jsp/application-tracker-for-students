import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    program_name: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    submissionDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Application = mongoose.model("Applications", applicationSchema);

export default Application;
