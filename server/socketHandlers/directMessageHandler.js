import Message from "../models/message.js";
import Conversation from "../models/conversation.js";

const directMessageHandler = async (socket, data) => {
  try {
    console.log('dm event is being handled')
    const { userId } = socket.user;
    const { receiverUserId, content } = data;
    const message = await Message.create({
      content: content,
      authorId: userId,
      date: new Date(),
      type: "DIRECT",
    });

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });

    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save();
    } else {
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverUserId],
      });

    }
  } catch (err) {
    console.log(err);
  }
};

export default directMessageHandler;
