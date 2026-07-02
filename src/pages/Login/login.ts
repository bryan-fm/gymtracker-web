import { gql } from '@apollo/client'

export interface LoginInput {
  email: string
  password: string
}

export interface LoginResponse {
  login: {
    token: string
  }
}

export const LOGIN = gql`
  mutation login($input: LoginDto!) {
    login(data: $input) {
      email
      name
      token
    }
  }
`
