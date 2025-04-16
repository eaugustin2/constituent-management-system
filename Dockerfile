# Use official Node image with Alpine for small size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copy the rest of your project
COPY . .

# Expose dev server port
EXPOSE 3000

# Start dev server with hot reload
CMD ["npm", "run", "dev"]
