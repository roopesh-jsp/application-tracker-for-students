import express from "express";
import { login, signup } from "../controllers/user.controler.js";
const userRoutes = express.Router();

// Route for User Signup
userRoutes.post("/signup", signup);

// Route for User Login
userRoutes.post("/login", login);

export default userRoutes;
