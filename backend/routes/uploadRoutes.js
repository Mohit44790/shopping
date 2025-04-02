import express from "express";
import { uploadImage, upload } from "../controllers/uploadController.js";
// import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/",  upload.single("image"), uploadImage);

export default router;
