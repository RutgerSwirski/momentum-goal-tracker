import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import { signup, login } from "../controllers/authController";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email", "openid"], // Scopes should be here
  })
);

// Google login callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
  (req: any, res: any) => {
    if (!req.user) {
      return res.status(400).json({ message: "Authentication failed" });
    }

    console.log(req.user);

    // Generate a JWT token for the user
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.redirect(`/dashboard?token=${token}`);
  }
);

export default router;
