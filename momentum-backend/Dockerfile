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
CMD ["node", "dist/index.js"]
