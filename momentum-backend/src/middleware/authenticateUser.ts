import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any; // You can specify the exact shape of the user object here
}

const authenticateUser = (req: any, res: any, next: any) => {
  const token = req.cookies?.authToken; // Assuming the token is stored in cookies
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // check if token is valid
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded; // Attach user data to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticateUser;
