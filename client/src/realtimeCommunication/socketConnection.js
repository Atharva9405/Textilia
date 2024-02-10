import { io } from "socket.io-client";
import {
  setPendingFriendsInvitation,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";
import { newRoomCreated, updateActiveRooms } from "./roomHandler";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io("http://localhost:5000", {
    transports: ["websocket"],
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {
    console.log("successfully connected with socke.io");
    console.log(socket.id);
  });
  socket.on("connect_error", (error) => {
    console.error("Socket.IO connection error:", error);
  });
  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitation(pendingInvitations));
  });
  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });
  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    console.log(data)
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create',(data) => {
    newRoomCreated(data)
  })

  socket.on('active-rooms', (data)=> {
    updateActiveRooms(data)
  })

};

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit('room-create')
}
