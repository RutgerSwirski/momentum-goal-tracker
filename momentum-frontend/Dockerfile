# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]
