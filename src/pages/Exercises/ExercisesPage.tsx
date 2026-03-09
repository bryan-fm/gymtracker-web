import { useMediaQuery } from '@mantine/hooks'
import styles from './exercises.module.css'
import CommonGrid from '../../components/Grid/CommonGrid'
import { CommonCardInterface } from '../../components/Card/CommonCard'
import { Button } from '@mantine/core'

export function ExercisesPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const exercisesList: CommonCardInterface[] = [
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
    {
      text: 'Fichas',
      subText: 'Biceps',
      hasButton: true,
      buttonText: 'Editar',
      img: 'https://boxlifemagazine.com/wp-content/uploads/2023/09/Untitled-design-2023-09-27T093955.153-1.png',
    },
  ]
  return (
    <div className={styles.main}>
      <Button style={{ marginTop: '50px', backgroundColor: 'darkorange' }}>+ Novo Exercício</Button>
      <section className={styles.container}>
        <CommonGrid list={exercisesList} />
      </section>
    </div>
  )
}

export default ExercisesPage
