import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LadingPage'
import WorkoutsPage from './pages/Workouts/WorkoutsPage'
import ExercisesPage from './pages/Exercises/ExercisesPage'
import ExercisePage from './pages/Exercise/ExercisePage'
import ProtectedRoute from './ProtectedRoutes'
import LoginPage from './pages/Login/LoginPage'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workouts/exercises" element={<ExercisesPage />} />
        <Route path="/workouts/exercises/save" element={<ExercisePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
