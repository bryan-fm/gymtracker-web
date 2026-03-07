import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import LandingPage from './pages/LadingPage'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  )
}

export default App
