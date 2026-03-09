import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LadingPage'
import WorkoutsPage from './pages/Workouts/WorkoutsPage'
import ExercisesPage from './pages/Exercises/ExercisesPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/workouts" element={<WorkoutsPage />} />
            <Route path="/workouts/exercises" element={<ExercisesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
