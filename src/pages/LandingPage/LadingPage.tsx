import { useMediaQuery } from '@mantine/hooks'
import training from '../../assets/traning.png'
import styles from './landing.module.css'
import LogoName from '../../components/LogoName/LogoName'

import { IconBarbell } from '@tabler/icons-react'
import { IconWeight } from '@tabler/icons-react'
import { IconSalad } from '@tabler/icons-react'
import { IconTrendingUp2 } from '@tabler/icons-react'
import { IconCalendar } from '@tabler/icons-react'

import CommonCard from '../../components/Card/CommonCard'

export function LandingPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className={styles.container}>
      <div className={styles['orange-accent']}></div>

      <div className={styles.content}>
        <div>
          <LogoName />
          <h1 style={{ color: 'white' }}>Controle total do seus treinos </h1>
          <p className={styles['description']}>
            Organize treinos, monte dietas e acompanhe sua evolução de forma simples e eficiente,
            tudo em um só lugar, pensado para quem leva resultados a sério
          </p>
        </div>

        <div className={styles.iconDiv}>
          <img src={training} className={styles.icon} alt="Sandshrew" />
          <div style={{ marginTop: '10', textAlign: 'center' }}>
            <IconBarbell color="white" size={50} />
            <IconSalad color="green" size={50} />
          </div>
        </div>
      </div>

      <div className={styles.cardsContent}>
        <CommonCard
          cardWidth="400px"
          text="Treinos organizados"
          subText="Monte e personalize seus treinos com facilidade, acompanhando séries, cargas e intervalos"
          backgroundColor="lightgray"
          icon={<IconBarbell color="black" size={80} />}
        ></CommonCard>
        <CommonCard
          cardWidth="400px"
          text="Dietas personalizadas"
          subText="Crie e gerencie planos alimentares de acordo com seus objetivos e necessidades"
          backgroundColor="lightgray"
          icon={<IconSalad color="darkgreen" size={80} />}
        ></CommonCard>
        <CommonCard
          cardWidth="400px"
          text="Acompanhe sua evolução"
          subText="Visualize seus progresso com gráficos e estatisticas de peso, medidas e desempenho"
          backgroundColor="lightgray"
          icon={<IconTrendingUp2 color="darkred" size={80} />}
        ></CommonCard>
        <CommonCard
          cardWidth="400px"
          text="Calendário inteligente"
          subText="Agende treinos e mantenha consistência na sua rotina"
          backgroundColor="lightgray"
          icon={<IconCalendar color="darkblue" size={80} />}
        ></CommonCard>
      </div>
    </section>
  )
}

export default LandingPage
