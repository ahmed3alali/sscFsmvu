// In your backend server (e.g., Express route)
import express from "express";
import cloudinary from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Upload image to Cloudinary
  cloudinary.v2.uploader
    .upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        return res.status(500).json({ message: "Image upload failed", error });
      }
      res.json({ imageUrl: result.secure_url });
    })
    .end(req.file.buffer);
});

export default router;
