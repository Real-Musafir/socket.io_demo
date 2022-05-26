const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.get("/", (req, res) => {
  res.send("hello World");
});

io.on("connection", (socket) => {
  console.log("a user connected :D");
  console.log(socket);
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log(`Zoom Clone Api listening on localhost:3001`);
});
