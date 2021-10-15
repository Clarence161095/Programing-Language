const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("on-chat", (data) => {
    io.emit("user-chat", data);
  });
});

server.listen(3030, () => {
  console.log("Listening on http://localhost:3030");
});
