import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

const BlogModel = mongoose.model("Blog", blogSchema);

export default BlogModel;
