import express from "express";
import { authMiddleware } from "../middlers/auth.middleware.js";
import { createApplication } from "../controllers/applicaiton.controller.js";

const applicationRoute = express.Router();

// Route to create a new application (protected route)
applicationRoute.post("/create", authMiddleware, createApplication);

export default applicationRoute;
