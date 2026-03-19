import { useMediaQuery } from '@mantine/hooks'
import styles from './exercises.module.css'
import CommonGrid from '../../components/Grid/CommonGrid'
import { CommonCardInterface } from '../../components/Card/CommonCard'
import { Button, LoadingOverlay } from '@mantine/core'
import { GET_WORKOUTS } from '../Workouts/workoutsQuery'
import { useQuery } from '@apollo/client/react'
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
    <div className={styles.main}>
      <Button style={{ marginTop: '10px', backgroundColor: 'darkorange' }}>+ Novo Exercício</Button>
      <section className={styles.container}>
        <CommonGrid list={options} />
      </section>
    </div>
  )
}

export default ExercisesPage
