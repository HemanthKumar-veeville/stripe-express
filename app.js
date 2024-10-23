const express = require("express");
const cors = require("cors"); // Import cors
const stripeRoutes = require("./routes/stripeRoutes");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Routes
app.use("/api/stripe", stripeRoutes);

module.exports = app;
