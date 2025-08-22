# Use an official Node.js runtime as a parent image
FROM node:24-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application's source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Set the environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
