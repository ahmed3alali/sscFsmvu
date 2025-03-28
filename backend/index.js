import mongoose from "mongoose";
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

import announcementRouter from "../backend/Router/AnnouncementRouter.js"
import userRoutes from "../backend/Router/authRoutes.js"
import photoRouter from "../backend/Router/ImageRouter.js"

const app = express();

// CORS middleware: Ensure it is placed before any routes are handled
app.use(cors({
  origin: 'https://ssc-fsmvu.vercel.app',  // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Alternatively, if you're using the custom middleware, you can add that instead:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://ssc-fsmvu.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`ERROR : ${err}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
});

if (process.env.NODE_ENV !== 'PRODUCTION') {
    dotenv.config();
}

const MongoUrl = process.env.DB_LOCAL_URI;
mongoose.connect(MongoUrl).then(() => {
    console.log("Connected to SSC FSMVU Database Successfully!");
}).catch((error) => {
    console.log(error);
});

app.use(express.json({ limit: '10mb' }));
app.use("/api/v1", announcementRouter);
app.use("/api/v1", userRoutes);
app.use("/api/v1", photoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
