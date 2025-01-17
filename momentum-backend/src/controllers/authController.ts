import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { generateRefreshToken } from "../utils/generateTokens";

export const signup = async (req: any, res: any) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
    });

    res.cookie("refreshToken", generateRefreshToken(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "lax", // Use "lax" for cross-origin but secure requests
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "lax",
    });

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Please provide email and password" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password!);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
    });

    res.cookie("refreshToken", generateRefreshToken(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "lax", // Use "lax" for cross-origin but secure requests
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "lax",
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const validateToken = (req: any, res: any) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return res.status(200).json({ valid: true, user: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// logout
export const logout = (req: any, res: any) => {
  try {
    res.clearCookie("authToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const refreshToken = async (req: any, res: any) => {
  const { refreshToken } = req.cookies;

  console.log(req.cookies, "cookies");

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET!,
    async (err: any, user: any) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const existingUser = await User.findById(user.id);

      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const token = jwt.sign(
        { id: existingUser._id },
        process.env.JWT_SECRET!,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
        }
      );

      res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000,
        sameSite: "lax",
      });

      res.status(200).json({ message: "Token refreshed" });
    }
  );
};
