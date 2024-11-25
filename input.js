const handleUserInput = function (key, conn) {
  // Short circuit if user presses Ctrl+C
  if (key === "\u0003") {
    process.exit();
  }

  // Map key strokes to commands
  const mappings = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right",
  };

  // Check if the key has a mapping and write the corresponding command
  if (mappings[key]) {
    conn.write(mappings[key]);
  } else if (key === "t") {
    // Handle custom message input
    process.stdout.write("Enter your message: ");

    // Capture user input for the message
    process.stdin.once("data", (input) => {
      const message = input.toString().trim(); // Get the message and trim whitespace
      if (message.length <= 20) {
        conn.write(`Say: ${message}`);
      } else {
        console.log("Message is too long! Please limit to 20 characters.");
      }
    });
  } else if (key === "1") {
    // Simplified special message
    conn.write("Say: special message");
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Pass the connection object to handleUserInput
  stdin.on("data", (key) => handleUserInput(key, conn));

  return stdin;
};

// Export only setupInput
module.exports = { setupInput };
