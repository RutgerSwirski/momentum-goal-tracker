import express from "express";

import {
  deleteStep,
  getStep,
  getSteps,
  updateStep,
} from "../controllers/stepController";
import authenticateUser from "../middleware/authenticateUser";

const router = express.Router();

router.get("/", authenticateUser, getSteps);
router.get("/:id", getStep);
router.put("/:id", updateStep);
router.delete("/:id", deleteStep);

export default router;
