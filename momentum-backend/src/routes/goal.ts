import { Router } from "express";
import authenticate from "../middleware/auth";
import {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
} from "../controllers/goalController";

const router = Router();

router.get("/", getGoals);

router.post("/", authenticate, createGoal);

router.get("/:id", authenticate, getGoal);

router.put("/:id", authenticate, updateGoal);

router.delete("/:id", authenticate, deleteGoal);

export default router;
