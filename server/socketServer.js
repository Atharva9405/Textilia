import { Server } from "socket.io";

const registerSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    transports: ['websocket']
  });

  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
  });
};

export default registerSocketServer;
