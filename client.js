const io = require("socket.io-client");
const API_URL = "http://localhost:3001/";
//  const API_URL = "http://192.168.0.102:3001/";

socket = io(`${API_URL}`);
console.log("Yooooo");
socket.on("connection", () => console.log("connected"));

socket.emit("chat message", { msg: "asdf" });
