# # Use a multi-stage build for smaller image size
#  FROM node:22-alpine as build

#for latest version of node use lts
FROM node:lts-alpine

# Set working directory 
WORKDIR /usr/src/app
COPY package*.json ./   
RUN npm install         
COPY . .                                                                                                                                                                                                                                        
# Copy package.json and install dependencies
# COPY package*.json ./
# RUN npm run start --only=production

# # Copy the rest of the application code


# # Build the application
# RUN npm run build

# # Use a smaller production-optimized image
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy only the necessary files from the build stage
# COPY --from=build /app/dist /app
# COPY --from=build /app/package*.json ./

# # Install only production dependencies
# RUN npm install --production

# # Expose the port your app listens on
# EXPOSE 3000

# USER node
# # Start the application
# CMD ["node", "dist/app.js"]

EXPOSE 3000
CMD ["npm", "run", "start"]