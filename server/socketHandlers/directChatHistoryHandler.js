import Conversation from "../models/conversation.js";
import { updateChatHistory } from "./updates/chat.js";

const directChatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId } = data;
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
      type: "DIRECT",
    });

    if (conversation) {
      updateChatHistory(conversation._id.toString(), socket.id);
    } else {
      console.log("No direct conversation found");
    }
  } catch (err) {
    console.log(err);
  }
};

export default directChatHistoryHandler;
