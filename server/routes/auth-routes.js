const express = require("express");
const authController = require("../controllers/auth-controller");

const {
  signUpValidation,
  validate,
  signInValidation,
  updateForgotPassword,
} = require("../middleware/validation");
const passport = require("passport");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.post("/signup", signUpValidation, validate, authController.signup);

router.post("/sign", signInValidation, validate, authController.sign);

router.post("/refresh", authController.refresh);

router.delete("/logout", protect, authController.signOut);

router.post("/forgot-password", authController.forgotPassword);

router.post(
  "/recovery-forgot-password",
  updateForgotPassword,
  validate,
  authController.recoveryForgotPassword
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL,
    session: false,
  }),
  authController.googleAuthCallback
);

module.exports = router;
