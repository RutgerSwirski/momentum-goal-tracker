# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# instsall ts node 
RUN npm install -g ts-node

# Copy the rest of the source code
COPY . .

# Compile TypeScript files to JavaScript
RUN npx tsc

# Expose the backend port
EXPOSE 5000

# Default command to seed database and start the backend
CMD ["sh", "-c", "npx ts-node src/seeds/index.ts && npx nodemon --watch ./src --ext ts,json --exec npx ts-node src/index.ts"]
