const express = require("express");
require("dotenv").config();
const app = express();
app.set("port", process.env.PORT);

const server = require("http").Server(app);
// const io = require("socket.io")(server);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

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

server.listen(process.env.PORT || 3001, () => {
  console.log(`Api listening on localhost:3001`);
});
