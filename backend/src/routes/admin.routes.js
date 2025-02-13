import express from "express";
import {
  adminLogin,
  getAllApplications,
  updateApplicationStatus,
} from "../controllers/admin.controller.js";
import { adminAuthMiddleware } from "../middlers/admin.middleware.js";

const adminRoute = express.Router();

// Route for admin login
adminRoute.post("/admin/login", adminLogin);

//get all applications
adminRoute.get("/get-all", adminAuthMiddleware, getAllApplications);

adminRoute.put(
  "/admin/application",
  adminAuthMiddleware,
  updateApplicationStatus
);

export default adminRoute;
