import { gql } from '@apollo/client'

export const GET_WORKOUTS = gql`
  query workouts {
    workouts {
      id
      name
      description
      kind
      reps
      weight
      image
    }
  }
`
