import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    surname: String,
    id: String
})

export const Users = mongoose.model('users', UserSchema);