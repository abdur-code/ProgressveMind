import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // allow your frontend origin
    credentials: true
  }));
  

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/backend/user', userRoutes);
app.use('/backend/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});