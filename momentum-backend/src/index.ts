import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import passport from "passport";
import authRoutes from "./routes/auth";

dotenv.config();

require("./config/passport");

const app = express();
const port = 5000;

app.use(express.json());
app.use(passport.initialize());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.use("/auth", authRoutes);
// dashboard
// app.use("api/dashboard", dashboardRoutes);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
