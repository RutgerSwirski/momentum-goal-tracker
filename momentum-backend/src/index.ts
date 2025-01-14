import dotenv from "dotenv";
import express, { Request, Response } from "express";
import passport from "passport";
import authRoutes from "./routes/auth";
import goalRoutes from "./routes/goal";
import recommendationsRoutes from "./routes/recommendations";
import userRoutes from "./routes/user";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import connectDB from "./db";
import helmet from "helmet";
import authenticateUser from "./middleware/authenticateUser";
import taskRoutes from "./routes/task";

dotenv.config();

require("./config/passport");

const app = express();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Momentum API",
      version: "1.0.0",
      description: "Momentum API Information",
      contact: {
        name: "Developer",
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({
    message: "An unexpected error occurred",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.use("/auth", authRoutes);

app.use("/goals", authenticateUser, goalRoutes);

app.use("/recommendations", authenticateUser, recommendationsRoutes);

app.use("/users", authenticateUser, userRoutes);

app.use("/tasks", authenticateUser, taskRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
