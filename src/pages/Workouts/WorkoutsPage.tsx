import { useMediaQuery } from '@mantine/hooks'
import styles from './workouts.module.css'
import CommonCard from '../../components/Card/CommonCard'
import LogoName from '../../components/LogoName/LogoName'

export function WorkoutsPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className={styles.main}>
      <LogoName />
      <section className={styles.container}>
        <CommonCard
          text="Exercícios"
          subText="Controle seus exercícios, faça o cadastro deles para adicionar às suas fichas de treino"
          hasButton={true}
          buttonText="Cadastrar Exercícios"
          img="https://hips.hearstapps.com/hmg-prod/images/muscular-man-doing-pushup-exercise-with-dumbbell-royalty-free-image-1728661212.jpg?crop=1.00xw:1.00xh;0,0"
          link="/workouts/exercises"
          cardHeight={isMobile ? '10%' : ''}
          cardWidth={isMobile ? '70%' : ''}
        />
        <CommonCard
          text="Fichas"
          subText="Monte seus treinos da semana, escolha os exercícios cadastrados para montar sua ficha"
          hasButton={true}
          buttonText="Cadastrar Exercícios"
          img="https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png"
          cardHeight={isMobile ? '10%' : ''}
          cardWidth={isMobile ? '70%' : ''}
        />
      </section>
    </div>
  )
}

export default WorkoutsPage
