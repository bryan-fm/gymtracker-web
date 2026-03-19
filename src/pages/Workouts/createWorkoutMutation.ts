import { gql } from '@apollo/client'

export interface CreateWorkoutInput {
  name: string
  description: string
  image: string
  kind: string
  reps: number
  weight: number
}

export interface CreateExerciseResponse {
  createExercise: {
    id: string
    name: string
    description?: string
    createdAt: string
  }
}

export const CREATE_WORKOUT = gql`
  mutation CreateExercise($input: CreateWorkoutInput!) {
    createWorkout(input: $input) {
      id
      name
      description
    }
  }
`
