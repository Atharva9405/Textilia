import {addNewConnectedUser} from "../serverStore.js";
import {updateFriends, updateFriendsPendingInvitations} from "./updates/friends.js";

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  updateFriendsPendingInvitations(userDetails.userId)
  updateFriends(userDetails.userId)
};

export default newConnectionHandler;