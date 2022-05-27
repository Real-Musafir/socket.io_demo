const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Really come here?");
  res.send("hello World");
});

app.post("/", (req, res) => {
  console.log("Is this post request");
  console.log(req.body, "body find??");
  res.send({ ok: "ok" });
});

io.on("connection", (socket) => {
  console.log("a user connected :D");

  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log(`Zoom Clone Api listening on localhost:3001`);
});
