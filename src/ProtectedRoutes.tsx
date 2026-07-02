import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  // Replace this with your actual auth logic (e.g., from a context or redux)
  const isAuthenticated = !!localStorage.getItem('token')
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect them to /login, but save the current location they were
    // trying to go to. This allows us to send them back after they log in.
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
