const io = require("socket.io-client");
const fetch = require("node-fetch");
const API_URL = "http://localhost:3001";
// const API_URL = "http://192.168.0.102:3001/";

// socket = io(`${API_URL}`);
// console.log("Yooooo");
// socket.on("connection", (socket) => console.log("asdf"));

// socket.emit("chat message", { msg: "asdf" });

// fetch("http://localhost:3001")
//   .then((res) => res.text())
//   .then((text) => console.log(text));

let todo = {
  userId: 123,
  title: "loren impsum doloris",
  completed: false,
};

try {
  let result = fetch("http://localhost:3001", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Shahadath",
      password: "123456",
    }),
  });

  result.then((success) => {
    console.log(success);
  });
} catch (error) {
  console.log(error);
}
