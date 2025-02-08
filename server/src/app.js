import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.client,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("server is running properly")
})

import StudentResultRoute from "./routes/studentResult.route.js";
app.use("/admin/api", StudentResultRoute);

import adminRoute from "./routes/admin.route.js";
app.use("/admin/api", adminRoute);

import feedbackRoute from "./routes/feedback.route.js";
app.use("/user/api", feedbackRoute);

export { app }