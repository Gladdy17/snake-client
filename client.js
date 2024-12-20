//const client = require ('./client')
//
const net = require("net");
const { IP, PORT } = require('./constants'); 

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log('Welcome You have Connected to Snake');
  conn.write('Name: GP');
  conn.write('Move: up'); 

  setInterval(() => {
    conn.write("Move: up");
  }, 500);
});

 conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

//
// console.log("Connecting ...");
// connect();

module.exports = { connect };
