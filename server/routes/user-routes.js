const express = require("express");

const { protect } = require("../middleware/protect");

const userController = require("../controllers/user-controller");

const {
  validate,
  updateUserValidation,
  updatePasswordValidation,
} = require("../middleware/validation");

const router = express.Router();

router
  .route("/")
  .get(protect, userController.getUser)
  .put(protect, updateUserValidation, validate, userController.updateUser);

router.put(
  "/update-password",
  protect,
  updatePasswordValidation,
  validate,
  userController.updatePassword
);

router.get("/search", protect, userController.searchUser);

module.exports = router;
