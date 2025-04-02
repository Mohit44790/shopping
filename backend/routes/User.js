import express from "express";
import { register, login, logout, getProfile, addUser, updateUser, deleteUser } from "../controllers/User.js";
import { admin, protect } from "../middleware/authmiddleware.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protect, getProfile);

// Admin Routes
router.post("/add", protect, admin, addUser);
router.put("/update/:id", protect, admin, updateUser);
router.delete("/delete/:id", protect, admin, deleteUser);

export default router;
