import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import passport from "passport";
import authRoutes from "./routes/auth";
import goalRoutes from "./routes/goal";
import recommendationsRoutes from "./routes/recommendations";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

require("./config/passport");

const app = express();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.use("/auth", authRoutes);

app.use("/goals", goalRoutes);

app.use("/recommendations", recommendationsRoutes);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
