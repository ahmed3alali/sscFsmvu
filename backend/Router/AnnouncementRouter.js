import express from 'express';

import Announcement from "../models/AnnouncementModel.js";
import multer from 'multer'; // For handling file uploads
import cloudinary from 'cloudinary';
const router = express.Router();

// Initialize multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage for Cloudinary uploads
const upload = multer({ storage }).single('image'); // 'image' is the field name in FormData

// Cloudinary credentials (replace with your own)
const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dyde3lmte/image/upload";
const cloudinaryPreset = "sscfsmvu"; // Use your Cloudinary upload preset here


router.post("/announcements", async (req, res) => {
    try {
      const { message,explination, createdBy, imageUrl } = req.body; // Get data from the request body
  
      // Create and save the announcement with or without the imageUrl
      const newAnnouncement = new Announcement({
        message,
        explination,
        createdBy,
        imageUrl, // Store the image URL received from the frontend
      });
  
      await newAnnouncement.save();
      res.status(201).json(newAnnouncement);
    } catch (error) {
      console.error("Error creating announcement:", error);
      res.status(500).json({ error: "Could not create announcement!" });
    }
  });

// GET route to fetch announcements
router.get("/announcements", async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});










// Delete announcement and image from Cloudinary
router.delete("/announcement/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the announcement by ID (this assumes you have the image URL saved with the announcement)
    const announcement = await Announcement.findById(id);

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    // If the announcement has an image URL, delete it from Cloudinary
    if (announcement.imageUrl) {
      const publicId = announcement.imageUrl.split("/").pop()?.split(".")[0]; // Extract public ID from URL
      if (publicId) {
        await cloudinary.v2.uploader.destroy(publicId); // Delete image from Cloudinary
      }
    }

    // Delete the announcement from the database
    await Announcement.findByIdAndDelete(id);

    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    console.error("Error deleting announcement:", error);
    res.status(500).json({ message: "Error deleting announcement" });
  }
});

export default router;



