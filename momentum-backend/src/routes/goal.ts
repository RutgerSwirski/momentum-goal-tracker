import { Router } from "express";
import authenticate from "../middleware/auth";
import {
  createGoal,
  createGoalWithTasksAndSteps,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
} from "../controllers/goalController";

const router = Router();

router.get("/", authenticate, getGoals);

router.post("/", authenticate, createGoal);

router.get("/:id", authenticate, getGoal);

router.put("/:id", authenticate, updateGoal);

router.delete("/:id", authenticate, deleteGoal);

router.post("/consolidated", authenticate, createGoalWithTasksAndSteps);

export default router;
