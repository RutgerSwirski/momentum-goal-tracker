const express = require("express");
const { signup, login } = require("../controllers/authController");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post("/signup", signup);

router.post("/login", login);

// Google login callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req: any, res: any) => {
    // Generate a JWT token for the user
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.redirect(`/dashboard?token=${token}`);
  }
);

export default router;
