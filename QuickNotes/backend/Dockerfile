# Use Node.js image
FROM node:14

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY src ./src
COPY .env ./

# Expose port
EXPOSE 4000

# Start the application
CMD ["node", "src/app.js"]
