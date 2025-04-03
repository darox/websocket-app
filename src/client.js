const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to WebSocket server');
  ws.send('Hello from client!');
});

ws.on('message', (message) => {
  console.log(`Received from server: ${message}`);
});

ws.on('close', () => {
  console.log('Disconnected from server');
});

ws.on('error', (error) => {
  console.error(`Client error: ${error}`);
});

// Keep the client running
process.stdin.on('data', (data) => {
  ws.send(data.toString().trim());
});