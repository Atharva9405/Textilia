import { addNewActiveRoom } from "../serverStore.js";
import { updateRooms } from "./updates/rooms.js";

const roomCreateHandler = (socket) => {
  console.log("handling room create event");
  const socketId = socket.id;
  const userId = socket.user.userId;

  const roomDetails = addNewActiveRoom(userId, socketId);

  socket.emit("room-create", {
    roomDetails,
  });
  updateRooms();
};

export default roomCreateHandler;
