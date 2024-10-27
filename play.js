
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect(); // Store the connection object

setupInput(connection); // Pass the connection object to setupInput
