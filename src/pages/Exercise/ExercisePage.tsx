import { useMediaQuery } from '@mantine/hooks'
import styles from './exercises.module.css'
import { Button, Dialog, Divider, Group, Image, Input, Select, Text, Textarea } from '@mantine/core'
import CommonInput from '../../components/Input/CommonInput'
import { useEffect, useState } from 'react'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client/react'
import { CREATE_WORKOUT } from '../Workouts/createWorkoutMutation'
import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router-dom'
import { FileDialog } from '../../components/FileDialog/FileDialog'
import { UPDATE_WORKOUT } from '../Workouts/updateWorkoutMutation'
import { useParams } from 'react-router-dom'
import { GET_WORKOUT } from '../Workouts/workoutQuery'

export function ExercisePage() {
  const [createExercise, { loading: loadingCreate, error: errorCreate, data: dataCreate }] =
    useMutation(CREATE_WORKOUT)
  const [updateExercise, { loading: loadingUpdate, error: errorUpdate, data: dataUpdate }] =
    useMutation(UPDATE_WORKOUT)
  const [getExercise, { loading: loadingGet, error: errorGet, data: dataGet }] =
    useLazyQuery(GET_WORKOUT)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [kind, setKind] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [sets, setSets] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id && !isNaN(Number(id))) {
      getExercise({
        variables: {
          input: {
            id: Number(id),
          },
        },
      }).then((res: any) => {
        const workout = res.data.workout
        console.log(workout)
        setName(workout.name)
        setDesc(workout.description || '')
        setImage(workout.image)
        setKind(workout.kind)
        setReps(workout.reps.toString())
        setWeight(workout.weight.toString())
        setSets(workout.sets.toString())
      })
    }
  }, [id])

  const handleCreateorUpdate = async () => {
    if (id && !isNaN(Number(id))) {
      await updateExercise({
        variables: {
          input: {
            id: Number(id),
            data: {
              name: name,
              description: desc,
              image: image,
              kind: kind,
              reps: Number(reps),
              weight: Number(weight),
              sets: Number(sets),
            },
          },
        },
      })
      return
    }

    await createExercise({
      variables: {
        input: {
          name: name,
          description: desc,
          image: image,
          kind: kind,
          reps: Number(reps),
          weight: Number(weight),
          sets: Number(sets),
        },
      },
    })
  }

  const handleRequest = async () => {
    if (!image || !name || !desc || !kind || !reps || !weight) {
      const values = [image, name, desc, kind, reps, weight]
      const nullsOnly = values.filter((v) => v === null)

      notifications.show({
        color: 'red',
        title: 'Erro ao salvar os dados',
        message: 'Informe todos os campos',
        position: 'top-center',
      })
      return
    }

    try {
      await handleCreateorUpdate()
    } catch {
      notifications.show({
        color: 'red',
        title: 'Erro ao salvar os dados',
        message: 'Erro Inesperado',
        position: 'top-center',
      })
      return
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
      <div className={styles.content}>
        <div className={styles.cards}>
          <div className={styles.form}>
            <div
              style={{
                alignItems: 'center',
                padding: '2vh',
              }}
            >
              <Text c="white" size="xl" mb="md">
                Informações do Exercício
              </Text>
              <div style={{ marginTop: '3vh' }}>
                <CommonInput
                  value={name}
                  type="text"
                  label="Nome"
                  required
                  width={'100%'}
                  onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.currentTarget.value)
                    console.log(e.currentTarget.value)
                  }}
                />
                <div className={styles.inputTipo}>
                  <Text c="white">{'Grupo Muscular'}</Text>
                  <Select
                    value={kind}
                    data={[
                      { value: 'BACK', label: 'Costas' },
                      { value: 'CHEST', label: 'Peito' },
                      { value: 'LEGS', label: 'Perna' },
                      { value: 'BICEPS', label: 'Biceps' },
                      { value: 'TRICEPS', label: 'Triceps' },
                      { value: 'CARDIO', label: 'Cardio' },
                    ]}
                    styles={{
                      input: { color: 'white', backgroundColor: '#0f172a' }, // Actual input field
                    }}
                    width="30vw"
                    onChange={(value) => {
                      setKind(value || '')
                    }}
                  />
                </div>

                <div className={styles.pesos}>
                  <div className={styles.inputPeso}>
                    <CommonInput
                      value={weight}
                      type="text"
                      label="Peso(KG)"
                      required
                      width="100%"
                      onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setWeight(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className={styles.inputReps}>
                    <CommonInput
                      value={reps}
                      type="text"
                      label="Repetições"
                      required
                      width="100%"
                      onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setReps(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className={styles.inputSets}>
                    <CommonInput
                      value={sets}
                      type="text"
                      label="Séries"
                      required
                      width="100%"
                      onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSets(e.currentTarget.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form} style={{ height: '22vh', marginTop: '3vh' }}>
            <div
              style={{
                alignItems: 'center',
                padding: '2vh',
              }}
            >
              <Text c="white" size="xl" mb="md">
                Detalhes:
              </Text>
              <Textarea
                value={desc}
                minRows={4}
                maxRows={10}
                c="white"
                autosize
                style={{ width: '100%' }}
                onBlur={(e) => setDesc(e.currentTarget.value)}
                styles={{
                  input: { color: 'white', backgroundColor: '#0f172a' }, // Actual input field
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.imageForm}>
          <div
            style={{
              alignItems: 'center',
              padding: '2vh',
              alignSelf: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              justifySelf: 'center',
            }}
          >
            <Text c="white" size="xl" mb="md">
              Adicionar Imagem
            </Text>
            <div className={styles.imageDialog}>
              <div className={styles.imagePreview}>
                <Image src={image} classNames={{ root: styles.image }} fit="fill" />
              </div>
              <div style={{ border: '1px dashed white', borderRadius: '5px', padding: '1vh' }}>
                <FileDialog onDrop={(files) => setImage(URL.createObjectURL(files[0]))} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider my="md" color="white" style={{ width: '81.5vw', marginTop: '0px' }} />
      <div className={styles.buttonDiv}>
        <Button
          classNames={{ root: styles.cancelButton }}
          color="red"
          onClick={() => navigate('/workouts/exercises')}
        >
          {' '}
          Cancelar{' '}
        </Button>
        <Button
          classNames={{ root: styles.saveButton }}
          onClick={handleRequest}
          disabled={loadingCreate || loadingUpdate || loadingGet}
          color="darkorange"
        >
          Salvar Exercício
        </Button>
      </div>
    </div>
  )
}

export default ExercisePage
