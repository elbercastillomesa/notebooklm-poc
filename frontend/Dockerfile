# Use a Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 5173 (default Vite port)
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
