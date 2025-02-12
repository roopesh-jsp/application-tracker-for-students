import express from "express";
import {
  adminLogin,
  updateApplicationStatus,
} from "../controllers/admin.controller.js";
import { adminAuthMiddleware } from "../middlers/admin.middleware.js";

const adminRoute = express.Router();

// Route for admin login
adminRoute.post("/admin/login", adminLogin);

adminRoute.put(
  "/admin/application",
  adminAuthMiddleware,
  updateApplicationStatus
);

export default adminRoute;
