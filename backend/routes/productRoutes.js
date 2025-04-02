import express from "express";
import { 
  createProduct, 
  getProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct, 
  getquery 
} from "../controllers/productController.js";
import { admin, protect } from "../middleware/authmiddleware.js";


const router = express.Router();

// Product Routes
router.route("/")
  .post(protect, admin, createProduct)  // Create Product (Admin Only)
  .get(getProducts);                    // Get All Products

router.route("/filter").get(getquery);   // Get Products with Query Filters

router.route("/:id")
  .get(getProductById)                   // Get Single Product by ID
  .put(protect, admin, updateProduct)    // Update Product (Admin Only)
  .delete(protect, admin, deleteProduct);// Delete Product (Admin Only)

export default router;
