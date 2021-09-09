import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.model("Post", PostSchema);