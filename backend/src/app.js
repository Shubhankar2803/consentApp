import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import consentRoutes from './routes/consentRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();
// Routes
app.use('/api/consents', consentRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Consent Management API' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});