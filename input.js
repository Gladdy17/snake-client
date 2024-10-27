
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

if (key === 't') {
    // Prompt for message input (in a real implementation, you might want to collect this differently)
    process.stdout.write("Enter your message: ");
    
    // Capture user input for the message
    process.stdin.once('data', (input) => {
      const message = input.toString().trim(); // Get the message and trim whitespace
      if (message.length <= 20) { // Limit message length to 20 characters
        conn.write(`Say: ${message}`);
      } else {
        console.log("Message is too long! Please limit to 20 characters.");
      }
    });
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
