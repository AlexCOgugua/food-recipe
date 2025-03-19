const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Connect to database
connectDb();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Configure CORS
app.use(
  cors({
    origin: 'https://food-recipe-frontend-niqy.onrender.com/', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
    credentials: true,
  })
);

// Serve static files (images, etc.)
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
