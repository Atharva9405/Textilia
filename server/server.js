import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'
import registerSocketServer from "./socketServer.js";
import friendInvitationRoutes from './routes/friendInvitationRoutes.js'
import path from "path";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());


app.use('/api/auth',authRoutes)
app.use('/api/friend-invitation', friendInvitationRoutes)

const server = http.createServer(app);
registerSocketServer(server)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database connection Failed");
  });

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
