const express = require("express");
const multer = require("multer");
const app = express();
const path=require("path")

// Storage settings
const storage = multer.diskStorage({    /* creating a storage engine for Multer using diskStorage(). */
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Route for uploading
app.get("/", (req, res) => {   /* route for displaying the upload form */
  res.sendFile(path.join(__dirname, "index.html"));   
});
app.post("/upload", upload.single("myfile"), (req, res) => {  /* accepts only one file */
  res.send("File uploaded successfully!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
