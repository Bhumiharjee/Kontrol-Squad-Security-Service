# Stage 1: Build React frontend
FROM node:18-alpine AS build

# Set working directory for frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json for frontend
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source code
COPY frontend/ ./

# Build the React app
RUN npm run build

# Stage 2: Set up Node.js backend and serve React frontend
FROM node:18-alpine

# Set working directory for backend
WORKDIR /app

# Copy package.json and package-lock.json for backend
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY backend/ ./

# Copy built React app from the build stage
COPY --from=build /app/frontend/build ./frontend/build

# Expose the application port (e.g., 3000 for backend API)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
