import mongoose, { Schema } from "mongoose";

const studentResultSchema = new Schema({
    rollNumber: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    section: {
        type: String,
    },
    result: [
        {
            year: {
                type: Number,
                required: true
            },
            subjects: {
                type: Map,
                of: Number
            },
            totalMarks: {
                type: Number
            },
            resultStatus: {
                type: String
            }
        }
    ]

}, { timestamps: true });

export const StudentResult = mongoose.model("StudentResult", studentResultSchema);