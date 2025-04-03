# Use the official Node.js 20 image (latest LTS as of April 2025)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy source code
COPY src/ ./src/

# Expose the WebSocket port
EXPOSE 8080

# Start the WebSocket server
CMD ["npm", "start"]