const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Send welcome message to the newly connected client
  ws.send('Welcome to the WebSocket server!');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    
    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Broadcast: ${message}`);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});

console.log('WebSocket server running on ws://localhost:8080');