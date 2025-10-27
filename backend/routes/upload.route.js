import express from "express";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Single file upload
router.post("/single", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    
    const fileUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      fileUrl,
      filename: req.file.filename
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Multiple files upload
router.post("/multiple", upload.array("files", 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }
    
    const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
    res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      fileUrls,
      filenames: req.files.map(file => file.filename)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;