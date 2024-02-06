import { v4 as uuidv4 } from "uuid";

const connectedUsers = new Map();
let activeRooms = [];

let io = null;

export const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

export const getSocketServerInstance = () => {
  return io;
};

export const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("new connected users");
  console.log(connectedUsers);
};

export const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log("new connected users");
    console.log(connectedUsers);
  }
};

export const getActiveConnections = (userId) => {
  const activeConnections = [];
  connectedUsers.forEach(function (value, key) {
    if (value.userId === userId) {
      activeConnections.push(key);
    }
  });
  return activeConnections;
};

export const getOnlineUsers = () => {
  const onlineUsers = [];
  connectedUsers.forEach((value, key) => {
    onlineUsers.push({ socketId: key, userId: value.userId });
  });
  return onlineUsers;
};

export const addNewActiveRoom = (userId, socketId) => {
  const newActiveRoom = {
    roomCreator: {
      userId,
      socketId,
    },
    participants: [
      {
        userId,
        socketId,
      },
    ],
    roomId: uuidv4(),
  };
  activeRooms = [...activeRooms, newActiveRoom];
  console.log('new active rooms: ')
  console.log(activeRooms)
  return newActiveRoom;
};
