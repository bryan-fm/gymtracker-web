import { useMediaQuery } from '@mantine/hooks'
import styles from './exercises.module.css'
import { Button, Image, Input, Text, Textarea } from '@mantine/core'
import CommonInput from '../../components/Input/CommonInput'
import { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { CREATE_WORKOUT } from '../Workouts/createWorkoutMutation'
import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router-dom'

export function ExercisePage() {
  const [createExercise, { loading, error, data }] = useMutation(CREATE_WORKOUT)
  const [image, setImage] = useState(null)
  const [name, setName] = useState(null)
  const [desc, setDesc] = useState(null)
  const [kind, setKind] = useState(null)
  const [reps, setReps] = useState(null)
  const [weight, setWeight] = useState(null)
  const navigate = useNavigate()

  const handleCreate = async () => {
    console.log(image, name, desc, kind, reps, weight)
    if (!image || !name || !desc || !kind || !reps || !weight) {
      notifications.show({
        color: 'red',
        title: 'Erro ao salvar os dados',
        message: 'Informe todos os campos',
        position: 'top-center',
      })
      return
    }

    try {
      await createExercise({
        variables: {
          input: {
            name: name,
            description: desc,
            image: image,
            kind: kind,
            reps: Number(reps),
            weight: Number(weight),
          },
        },
      })
    } catch {
      notifications.show({
        color: 'red',
        title: 'Erro ao salvar os dados',
        message: 'Erro Inesperado',
        position: 'top-center',
      })
    }

    notifications.show({
      color: 'green',
      title: 'Sucesso',
      message: 'Registro salvo!',
      position: 'top-center',
    })

    navigate('/workouts/exercises')
  }

  return (
    <div className={styles.main}>
      <div className={styles.formBlock}>
        <CommonInput
          type="text"
          label="Nome"
          required
          width="100%"
          onBlur={(e) => {
            setName(e.currentTarget.value)
            console.log(e.currentTarget.value)
          }}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.inputTipo}>
          <CommonInput
            type="text"
            label="Tipo"
            required
            width="100%"
            onBlur={(e) => setKind(e.currentTarget.value)}
          />
        </div>

        <div className={styles.inputPeso}>
          <CommonInput
            type="text"
            label="Peso"
            required
            width="100%"
            onBlur={(e) => setWeight(e.currentTarget.value)}
          />
        </div>

        <div className={styles.inputReps}>
          <CommonInput
            type="text"
            label="Repetições"
            required
            width="100%"
            onBlur={(e) => setReps(e.currentTarget.value)}
          />
        </div>
      </div>

      <div className={styles.formBlock}>
        <Textarea
          label="Descrição"
          minRows={4}
          maxRows={10}
          c="white"
          autosize
          style={{ width: '100%' }}
          onBlur={(e) => setDesc(e.currentTarget.value)}
        />
      </div>

      <div className={styles.formBlock}>
        <Text c="white">Imagem</Text>
        <Input style={{ width: '100%' }} onBlur={(e) => setImage(e.currentTarget.value)} />
      </div>

      <div className={styles.formBlock}>
        <Image src={image} style={{ width: 400, height: 400 }} fit="fill" />
      </div>

      <Button onClick={() => handleCreate()}>Salvar</Button>
    </div>
  )
}

export default ExercisePage
