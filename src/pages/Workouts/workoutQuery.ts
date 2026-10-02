import { gql } from '@apollo/client'

export interface GetWorkoutInput {
  id: number
}

export interface GetWorkoutResponse {
  workout: {
    id: string
    name: string
    description?: string
    kind: string
    reps: number
    weight: number
    image: string
  }
}

export const GET_WORKOUT = gql`
  query workout($input: GetWorkoutInput!) {
    workout(input: $input) {
      id
      name
      description
      kind
      reps
      weight
      image
      sets
    }
  }
`
