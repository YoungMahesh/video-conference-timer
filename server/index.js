const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/", (req, res) => {
  res.send("Hi Mahesh");
});

const seconds1Max = 15,
  seconds2Max = 30,
seconds3Max = 45;
let seconds1 = -1,
  seconds2 = -1,
  seconds3 = -1;
let intervalId;
const startTimer = () => {
  intervalId = setInterval(() => {
    if (seconds1 >= 0) {
      io.emit("remSeconds1", seconds1);
      seconds1--;
    } else io.emit("remSeconds1", seconds1Max);
    if (seconds2 >= 0) {
      io.emit("remSeconds2", seconds2);
      seconds2--;
    } else io.emit("remSeconds2", seconds2Max);
    if (seconds3 >= 0) {
      io.emit("remSeconds3", seconds3);
      seconds3--;
    } else io.emit("remSeconds3", seconds3Max);
    const currentTime = Math.floor(Date.now() / 1000);
    console.log("seconds1", currentTime, seconds1);
    console.log("seconds2", currentTime, seconds2);
    console.log("seconds3", currentTime, seconds3);
  }, 1000);
};

io.on("connection", (socket) => {
  console.log("a user is connected");

  if (!intervalId) startTimer();
  socket.on("remSec1", (data, callback) => {
    if (seconds1 === -1) seconds1 = seconds1Max;
    callback();
  });
  socket.on("remSec2", (data, callback) => {
    if (seconds2 === -1) seconds2 = seconds2Max;
    callback();
  });
  socket.on("remSec3", (data, callback) => {
    if (seconds3 === -1) seconds3 = seconds3Max;
    callback();
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(3001, () => {
  console.log("listening on *:3001");
});
