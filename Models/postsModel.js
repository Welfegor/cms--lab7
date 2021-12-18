import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: String,
    id: String
})

export const Posts = mongoose.model('posts', PostSchema);