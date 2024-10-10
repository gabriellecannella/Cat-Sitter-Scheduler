// Import required packages
const express = require("express");
const cors = require("cors"); // Enable CORS for cross-origin requests
const multer = require("multer"); // For handling file uploads
const { Pool } = require("pg"); // PostgreSQL client
require("dotenv").config(); // Load environment variables from .env file

// Create an Express application
const app = express();
const port = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware to handle JSON and CORS
app.use(cors());
app.use(express.json());

// Setup PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Root Route (Home page)
app.get("/", (req, res) => {
  res.send("Welcome to the Cat Sitter Scheduler App!");
});

// Example Route for Booking a Cat Sitter
app.post("/book", async (req, res) => {
  const { name, date, time } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO bookings (name, date, time) VALUES ($1, $2, $3) RETURNING *",
      [name, date, time]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Multer setup for video file uploads (if you plan to allow video uploads)
const upload = multer({ dest: "uploads/" }); // Files will be saved to 'uploads' directory

// Example Route for Uploading Video Updates
app.post("/upload-video", upload.single("video"), (req, res) => {
  // Access uploaded file through req.file
  res.send("Video uploaded successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
