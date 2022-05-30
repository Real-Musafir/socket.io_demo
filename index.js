const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;
let channleName = "";

app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Really come here?");
  res.send("hello World");
});

app.post("/", (req, res) => {
  channleName = req.body.matchId;
  console.log(req.body.matchId, "body find??");
  res.send({ ok: "ok" });
});

io.on("connection", (socket) => {
  console.log("a user connected :D");

  socket.on(`${channleName}`, (msg) => {
    console.log(msg);
    io.emit(`${channleName}`, msg);
  });
});

server.listen(port, () => {
  console.log(`Zoom Clone Api listening on localhost:3001`);
});
