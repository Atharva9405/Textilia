import mongoose from "mongoose";

mongoose.models = {};
mongoose.modelSchemas = {};

const Schema = mongoose.Schema;

const userSchema = new Schema({
  mail: {
    type: String,
    unique: true,
  },
  username: { type: String },
  password: { type: String },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

export default User;
