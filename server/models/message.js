import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
  },
  date: { type: Date },
  type: { type: String },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
