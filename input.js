
const handleUserInput = function (key, conn) {
  if (key === '\u0003') { // Ctrl+C to exit
    process.exit();
  }

  // Map keys to movement commands and send them to the server
  if (key === 'w') {
    conn.write("Move: up");
  }
  if (key === 'a') {
    conn.write("Move: left");
  }
  if (key === 's') {
    conn.write("Move: down");
  }
  if (key === 'd') {
    conn.write("Move: right");
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInput(key, conn)); // Pass the connection to handleUserInput

  return stdin;
};

// Export only setupInput
module.exports = { setupInput };
