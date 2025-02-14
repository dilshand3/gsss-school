import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String
    }
}, { timestamps :true });

export const Admin = mongoose.model("Admin", AdminSchema);