import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res)=>{
// res.send("Server is Ready")
// })

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(
    `Server is running on port ${PORT} and the link is http://localhost:${PORT}/`
  );
});
