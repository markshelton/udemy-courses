import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  googleId: String,
  displayName: String
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
