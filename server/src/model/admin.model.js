import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
}, { timestamps });

export const Admin = mongoose.model("Admin", AdminSchema);