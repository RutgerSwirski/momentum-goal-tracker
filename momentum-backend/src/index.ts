import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { Request, Response } from "express";
import exampleRoute from "./routes/example";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.use("/api", exampleRoute);
// app.use("api/auth", authRoutes);
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
