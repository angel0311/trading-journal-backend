require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON data in the body of requests

// MongoDB connection string from a .env file
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // Start the server after a successful database connection
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
    .catch(err => {
        console.error('Connection error', err);
    });


const tradesRouter = require('./routes/trades');

// ... (Your existing middleware and MongoDB connection)

// Use the trades router for API requests
app.use('/trades', tradesRouter);

// ... (Rest of your server code)