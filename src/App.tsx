import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LadingPage'
import WorkoutsPage from './pages/Workouts/WorkoutsPage'
import ExercisesPage from './pages/Exercises/ExercisesPage'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import ExercisePage from './pages/Exercise/ExercisePage'

const client = new ApolloClient({
  link: new HttpLink({ uri: import.meta.env.VITE_API_URL }),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/workouts" element={<WorkoutsPage />} />
              <Route path="/workouts/exercises" element={<ExercisesPage />} />
              <Route path="/workouts/exercises/save" element={<ExercisePage />} />
            </Routes>
          </Layout>
        </ApolloProvider>
      </BrowserRouter>
    </>
  )
}

export default App
