import express from "express";
import cors from "cors";
import userRoutes from "./routes/use.routes.js";
import applicationRoute from "./routes/application.routes.js";
import adminRoute from "./routes/admin.routes.js";
const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));

app.use("/api", userRoutes);
app.use("/api", applicationRoute);
app.use("/api", adminRoute);
export default app;
