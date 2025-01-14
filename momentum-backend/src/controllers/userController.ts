import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const getUsers = async (req: any, res: any) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// get current user data from the token
export const getMe = async (req: any, res: any) => {
  // get the token from the cookies
  const token = req.cookies?.authToken;

  //decode the user from the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
  };

  //get the userId from the decoded user
  const userId = decoded.id;

  try {
    const user = await User.findOne({ _id: userId });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error });
  }
};

export const getUser = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({
      _id: id,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// update user data
export const updateUser = async (req: any, res: any) => {
  const { id } = req.params;
  const { email, password, name } = req.body;

  try {
    const updateData: any = { email, name };
    if (password) {
      updateData.password = await bcrypt.hash(password, 12);
    }

    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// delete user
export const deleteUser = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    await User.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
