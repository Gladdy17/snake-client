const { connect } = require('./client')
//
//
//
const setupInput = function () {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume();
  stdin.on("data",(key) => handleUserInput(key, conn));
  return stdin;

};


const handleUserInput = function (key) {
  if (key === '\u0003') { // Ctrl+C to exit
    process.exit();
  }

  // Map keys to movement commands
  if (key === 'w') conn.write("Move: up");
  if (key === 's') conn.write("Move: down");
  if (key === 'a') conn.write("Move: left");
  if (key === 'd') conn.write("Move: right");
};

 console.log("Connecting ...");
connect();
