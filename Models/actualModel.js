import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ActualSchema = new Schema({
    name: String,
    id: String
})

export const Actuals = mongoose.model('actuals', ActualSchema);