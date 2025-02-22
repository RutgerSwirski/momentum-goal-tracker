import { Router } from "express";
import {
  createGoal,
  createGoalWithTasksAndSteps,
  deleteGoal,
  getGoal,
  getGoalNextStep,
  getGoalProgress,
  getGoals,
  getTasksByGoal,
  updateGoal,
} from "../controllers/goalController";
import authenticateUser from "../middleware/authenticateUser";

const router = Router();

router.get("/", authenticateUser, getGoals);

router.post("/", authenticateUser, createGoal);

router.get("/:id", authenticateUser, getGoal);

router.get("/:id/progress", authenticateUser, getGoalProgress);

// get goal next step
router.get("/:id/nextStep", authenticateUser, getGoalNextStep);

router.put("/:id", authenticateUser, updateGoal);

router.delete("/:id", authenticateUser, deleteGoal);

router.get("/:goalId/tasks", authenticateUser, getTasksByGoal);

router.post("/consolidated", authenticateUser, createGoalWithTasksAndSteps);

export default router;
