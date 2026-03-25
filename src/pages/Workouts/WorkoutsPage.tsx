import styles from './workouts.module.css'
import CommonCard from '../../components/Card/CommonCard'
export function WorkoutsPage() {
  return (
    <section className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div>
          <h2 style={{ color: 'gray' }}>Gerencie seus </h2>
          <p className={styles.mainText}>Treinos Personalizados </p>
          <p className={styles.description}>
            Organize treinos, monte dietas e acompanhe sua evolução de forma simples e eficiente,
            tudo em um só lugar, pensado para quem leva resultados a sério
          </p>
        </div>
      </div>
      <div className={styles.cardsContent}>
        <CommonCard
          text="Exercícios"
          subText="Controle seus exercícios, faça o cadastro deles para adicionar às suas fichas de treino"
          hasButton
          buttonText="Cadastrar Exercícios"
          img="https://hips.hearstapps.com/hmg-prod/images/muscular-man-doing-pushup-exercise-with-dumbbell-royalty-free-image-1728661212.jpg?crop=1.00xw:1.00xh;0,0"
          link="/workouts/exercises"
          cardWidth="400px"
        />

        <CommonCard
          text="Fichas"
          subText="Monte seus treinos da semana, escolha os exercícios cadastrados para montar sua ficha"
          hasButton
          buttonText="Cadastrar Exercícios"
          img="https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png"
          cardWidth="400px"
        />
      </div>
    </section>
  )
}

export default WorkoutsPage
