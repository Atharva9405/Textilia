import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoutes)

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database connection Failed");
  });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
