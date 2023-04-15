import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect MONGO successfully");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Connection closed");
});

// mongoose.connection.on("connected", ()=> {
//     console.log("Connection on");
// })

// app.get("/users", (req, res)=> {
//     res.send("hello. Im in response send")
// });

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Im middleware");
//   next();
// });

//middlware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "sth went wrong";
  return res
    .status(errStatus)
    .json({
      success: false,
      status: errStatus,
      message: errMessage,
      stack: err.stack,
    });
});

app.listen(8800, () => {
  connect();
  console.log("connect to BE!!!");
});
