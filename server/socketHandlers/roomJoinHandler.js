import { getActiveRoom,joinActiveRoom } from "../serverStore.js";
import { updateRooms } from "./updates/rooms.js";

const roomJoinHandler = (socket, data) => {
  const { roomId } = data;
  const participantDetails = {
    userId: socket.user.userId,
    socketId: socket.id,
  };
  const roomDetails = getActiveRoom(roomId);
  joinActiveRoom(roomId, participantDetails);
  updateRooms();
};

export default roomJoinHandler;
