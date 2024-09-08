# Stage 1: Build the NestJS application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Clean the node_modules directory and install dependencies
RUN rm -rf node_modules
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Run the NestJS application
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the build files from the first stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose the application port
EXPOSE 3012

# Run the NestJS application
CMD ["node", "dist/main.js"]