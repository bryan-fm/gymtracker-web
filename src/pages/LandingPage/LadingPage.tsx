import { useMediaQuery } from '@mantine/hooks'
import training from '../../assets/traning.png'
import styles from './landing.module.css'
import LogoName from '../../components/LogoName/LogoName'

export function LandingPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className={styles.container}>
      <div className={`${styles['bg-text']} ${styles['outline-text']}`}>WORKOUT</div>
      <div className={styles['orange-accent']}></div>

      <div className={styles.content}>
        <LogoName />
        <p className={styles['description']}>
          Organize seus treinos, dietas e acompanhe seu progresso e evolua na academia.
        </p>
      </div>

      <img src={training} className={styles.icon} alt="Sandshrew" />
    </section>
  )
}

export default LandingPage
