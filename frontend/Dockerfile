# Use a Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies

#  Clear the npm cache
RUN rm -rf node_modules \
    && rm -f package-lock.json \
    && rm -f yarn.lock \
    && npm cache clean --force

COPY package.json ./

RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 5173 (default Vite port)
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
