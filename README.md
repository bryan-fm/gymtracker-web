## 🏋️ GymTracker Web

Modern frontend for the GymTracker platform built with React + TypeScript.

This project focuses on:

 - Clean feature-based architecture
 - Authentication flow with JWT
 - React Query for server-state management
 - Structured API layer
 - Error & loading states handling
 - Performance optimizations

## 🏗 Project Structure
    src/
    ├── features/       # Feature-based modules
    ├── services/       # API client & integrations
    ├── hooks/          # Custom hooks
    ├── context/        # Global auth state
    ├── components/     # Shared UI components
    ├── types/          # Type definitions

## 🚀Features
# Authentication
 - Login
 - Token persistence
 - Route protection
 - Automatic logout

# Workouts
 - List workouts
 - Create workout
 - Check-in action
 - Real-time UI update after check-in

# State Management
 - React Query for server state
 - Context API for auth state

# ⚡ Performance
 - Memoized components
 - Optimized re-renders
 - Lazy loading
 - Query caching & invalidation

# 🛠 Tech Stack
 - React
 - TypeScript
 - React Query
 - TanStack Query
 - React Router
 - Vite

## 🐳 Running Locally
 - npm install
 - npm run dev

Default:

http://localhost:5173

## 🔐 API Integration

### The frontend connects to:

GymTracker API (NestJS backend)

 - JWT-based authentication
 - Secure route guards

## 📌 Design Goals
 - Clear separation of logic and UI
 - Maintainable folder structure
 - Production-ready patterns
 - Backend-aligned architecture