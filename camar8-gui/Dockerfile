# Use the official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Build the Next.js application
RUN npm run build
# RUN npm start

# Install MQTT library
RUN npm install mqtt

# Start the application in production mode
CMD ["npm", "start"]
