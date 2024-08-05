# Use a multi-stage build for smaller image size
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller production-optimized image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/dist /app
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port your app listens on
EXPOSE 3000

# Start the application
CMD ["node", "dist/app.js"]