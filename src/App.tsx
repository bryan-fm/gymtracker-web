import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LadingPage'
import WorkoutsPage from './pages/Workouts/WorkoutsPage'
import ExercisesPage from './pages/Exercises/ExercisesPage'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import ExercisePage from './pages/Exercise/ExercisePage'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes'

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API_URL,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }),

  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <AuthProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </AuthProvider>
        </ApolloProvider>
      </BrowserRouter>
    </>
  )
}

export default App
