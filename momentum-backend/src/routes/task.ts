import { Router } from "express";
import { getStepsByTask } from "../controllers/taskController";

const router = Router();

router.get("/:taskId/steps", getStepsByTask);

export default router;
