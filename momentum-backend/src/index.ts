import express, { Request, Response } from "express";
import exampleRoute from "./routes/example";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api", exampleRoute);
