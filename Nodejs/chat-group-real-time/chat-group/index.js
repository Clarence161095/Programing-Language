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

const db = chanel();

io.on("connection", (socket) => {
  socket.on("create", (data) => {
    const chanel = db.create(data);
    io.emit(data, chanel);
  });
  socket.on("join-chanel", (chanelID) => {
    const joinChanel = db.exists(chanelID);
    socket.emit(chanelID, joinChanel);
    socket.on(chanelID, (data) => {
      db.addMessages(chanelID, data);
      io.emit(chanelID, data);
    });
  });
});

server.listen(3030, () => {
  console.log("Listening on http://localhost:3030");
});
