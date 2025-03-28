import mongoose from "mongoose";
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

import announcementRouter from "../backend/Router/AnnouncementRouter.js"
import userRoutes from "../backend/Router/authRoutes.js"
import photoRouter from "../backend/Router/ImageRouter.js"
const app = express();
app.use(cors({
    origin: 'http://localhost:8080',  // replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],  // Specify the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true,  // Specify the allowed headers
  }));




  // Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`ERROR : ${err}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
});

dotenv.config();


const MongoUrl = process.env.DB_LOCAL_URI;
mongoose.connect(MongoUrl).then(()=>{

    console.log("connected to SSC FSMVU Database Successfully  !");
}).catch((error)=>{

console.log(error);

})

app.use(express.json({limit:'10mb'}));
app.use("/api/v1",announcementRouter);
app.use("/api/v1",userRoutes);
app.use("/api/v1",photoRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));