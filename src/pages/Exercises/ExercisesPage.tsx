import { useMediaQuery } from '@mantine/hooks'
import styles from './exercises.module.css'
import CommonGrid from '../../components/Grid/CommonGrid'
import { Button, Input, LoadingOverlay, Select } from '@mantine/core'
import { useWorkoutsOptions } from '../Workouts/useWorkoutOptions'

export function ExercisesPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  let { options, loading } = useWorkoutsOptions()

  if (loading) return <LoadingOverlay />

  options = options.map((option: any) => {
    return (option = {
      ...option,
      hasButton: true,
      buttonText: 'Editar',
    })
  })

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div>
          <p className={styles.mainText}>Exercícios </p>
          <p className={styles.description}>
            Gerencie seus exercícios, faça o cadastro deles para adicionar às suas fichas de treino
          </p>
        </div>
        <div>
          <Button
            style={{ marginTop: '10px', backgroundColor: 'darkorange' }}
            component="a"
            href="/workouts/exercises/save"
          >
            + Novo Exercício
          </Button>
        </div>
      </div>
      <section className={styles.main}>
        <div className={styles.filters}>
          <Input placeholder="Buscar exercício..." style={{ width: isMobile ? '75vw' : '50vw' }} />
          <Select
            placeholder="Tipo"
            data={['Costas', 'Peito', 'Perna', 'Biceps', 'Triceps', 'Cardio']}
            defaultValue={null}
            style={{ width: isMobile ? '75vw' : '10vw' }}
          />
          <Button style={{ width: isMobile ? '75vw' : '13vw', backgroundColor: 'darkorange' }}>
            Filtrar
          </Button>
        </div>
        <CommonGrid list={options} />
      </section>
    </div>
  )
}

export default ExercisesPage
