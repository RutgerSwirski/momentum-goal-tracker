FROM node:18

WORKDIR /app

# Copy package.json and tsconfig.json
COPY package.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY src ./src

# Compile TypeScript files to JavaScript
RUN npx tsc

# Expose the backend port
EXPOSE 5000

# Run the compiled JavaScript file
# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the backend port
EXPOSE 5000

# Use nodemon for development
CMD ["npx", "nodemon", "--watch", "./src", "--ext", "js,ts,json", "--exec", "node", "./dist/index.js"]
