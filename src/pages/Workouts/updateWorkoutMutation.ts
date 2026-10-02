import { gql } from '@apollo/client'

export interface UpdateWorkoutInputData {
  name: string
  description: string
  image: string
  kind: string
  reps: number
  weight: number
  sets: number
}

export interface UpdateWorkoutInput {
  id: number
  input: UpdateWorkoutInputData
}

export interface UpdateWorkoutResponse {
  createExercise: {
    id: string
    name: string
    description?: string
    createdAt: string
  }
}

export const UPDATE_WORKOUT = gql`
  mutation UpdateWorkout($input: UpdateWorkoutInput!) {
    updateWorkout(input: $input) {
      id
      name
      description
    }
  }
`
