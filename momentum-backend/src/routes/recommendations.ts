import express from "express";
import {
  generateStepRecommendations,
  generateTaskRecommendations,
} from "../controllers/recommendationsController";

const router = express.Router();

router.post("/tasks", generateTaskRecommendations);

router.post("/steps", generateStepRecommendations);

export default router;
