import express from "express";

import {
  deleteStep,
  getStep,
  getSteps,
  markStepComplete,
  updateStep,
} from "../controllers/stepController";

const router = express.Router();

router.get("/", getSteps);
router.get("/:id", getStep);
router.put("/:id", updateStep);
router.delete("/:id", deleteStep);
router.post("/:id/complete", markStepComplete);

export default router;
