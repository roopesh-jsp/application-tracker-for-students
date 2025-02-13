import express from "express";
import { getUser, login, signup } from "../controllers/user.controler.js";
import { authMiddleware } from "../middlers/auth.middleware.js";
const userRoutes = express.Router();

// Route for User Signup
userRoutes.post("/signup", signup);

// Route for User Login
userRoutes.post("/login", login);

//get user data
userRoutes.get("/get-user", authMiddleware, getUser);

export default userRoutes;
