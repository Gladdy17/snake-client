Getting Started
To get started with the Snake Client project, follow these steps:

Prerequisites
Node.js: Ensure you have Node.js installed on your machine. You can download it from Node.js official website.

Server Setup: Before running the client, you need to have the server up and running. You can download and install the server from the provided link in your documentation. Make sure to follow the server's setup instructions.

Installation
Clone the Repository: If you haven't already, clone the repository to your local machine:
git clone git@github.com:Gladdy17/snake-client.git

bash
Copy code
npm install
Running the Client
Start the Server: Make sure your server is running. You should see console logs indicating that the server is ready to accept connections.

Start the Client: In a separate terminal window, navigate to your client directory and run:

bash
Copy code
node play.js
Connect to the Game: Once the client is running, you should see a welcome message in the console, indicating that you have connected to the Snake game server.

Controls
Use the following keys to control your snake:
W: Move Up
A: Move Left
S: Move Down
D: Move Right
T: Send a message to the server (e.g., "Say: Hello!")
Additional Information
Configuration: You can modify the configuration settings in constants.js, including the server IP and port.

Game Rules: Avoid colliding with the walls or your own snake as you eat food to grow. The objective is to grow as long as possible!

Troubleshooting
If you encounter issues:

Check Server Connection: Ensure the server is running on the specified IP and port.
Console Errors: Look for error messages in your console for hints on what might be wrong.
Dependency Issues: Ensure all dependencies are correctly installed.
