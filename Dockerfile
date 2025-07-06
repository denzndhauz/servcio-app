# Dockerfile for Nuxt.js Application
FROM node:18.20.3-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Development stage
FROM base AS development
WORKDIR /app

# Copy package files
COPY package*.json pnpm-lock.yaml* ./

# Install all dependencies (including dev dependencies)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables for development
ENV NODE_ENV=development
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Start development server
CMD ["pnpm", "run", "dev"]