import { useMediaQuery } from '@mantine/hooks'
import training from '../assets/traning.png'
import './index.css'

export function LandingPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className="container">
      <div className="bg-text outline-text">WORKOUT</div>
      <div className="orange-accent"></div>

      <div className="content">
        <h1 className="main-title">
          <span className="highlight">GYM</span>
          <br />
          TRACKER
        </h1>
        <p className="description">
          Organize seus treinos, dietas e acompanhe seu progresso e evolua na academia.
        </p>
      </div>

      <img src={training} className="icon" alt="Sandshrew" />
    </section>
  )
}

export default LandingPage
