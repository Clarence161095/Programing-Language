const chanel = require("./chanel.js");
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

const data = chanel();

io.on("connection", (socket) => {
  socket.on("create", (data) => {
    console.log(data);
  });
  socket.on("on-chat", (data) => {
    io.emit("user-chat", data);
  });
});

server.listen(3030, () => {
  console.log("Listening on http://localhost:3030");
});
