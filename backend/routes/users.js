const express = require("express");
const {
  authUser,
  registerUser,
  getUserProfile,
} = require("../controllers/userController");

const router = express.Router();

const { protect, admin } = require("../middleware/authMiddleware");

console.log("in user routes");
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
