import express from "express";

import {
  deleteUser,
  getMe,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

// get users
router.get("/", getUsers);

// get me
router.get("/me", getMe);

//get user
router.get("/:id", getUser);

// update user
router.put("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);

export default router;
