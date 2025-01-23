# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and tsconfig.json
COPY package.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Compile TypeScript files to JavaScript
RUN npx tsc

# Expose the backend port
EXPOSE 5000

# Use nodemon for development
CMD ["npx", "nodemon", "--watch", "./src", "--ext", "js,ts,json", "--exec", "node", "./dist/index.js"]
