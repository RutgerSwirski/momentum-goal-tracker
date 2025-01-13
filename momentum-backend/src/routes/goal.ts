import { Router } from "express";
import authenticate from "../middleware/auth";
import {
  createGoal,
  createGoalWithTasksAndSteps,
  deleteGoal,
  getGoal,
  getGoals,
  getTasksByGoal,
  updateGoal,
} from "../controllers/goalController";

const router = Router();

router.get("/", authenticate, getGoals);

router.post("/", authenticate, createGoal);

router.get("/:id", authenticate, getGoal);

router.put("/:id", authenticate, updateGoal);

router.delete("/:id", authenticate, deleteGoal);

router.get("/:goalId/tasks", authenticate, getTasksByGoal);

router.post("/consolidated", authenticate, createGoalWithTasksAndSteps);

export default router;
