import express from "express";
import { protect } from "../middleware/authmiddleware.js";
import {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/", protect, addToCart); // Add item to cart
router.get("/", protect, getCartItems); // Get all cart items
router.put("/:id", protect, updateCartItem); // Update quantity
router.delete("/:id", protect, removeCartItem); // Remove single item
router.delete("/", protect, clearCart); // Clear entire cart

export default router;
