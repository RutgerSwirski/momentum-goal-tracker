import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

const signup = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req: any, res: any) => {
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
      expiresIn: "1h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { signup, login };
