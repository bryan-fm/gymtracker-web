import { createContext, ReactNode, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

type User = {
  token: string
  name: string
  email: string
}

type AuthContextData = {
  user: User | null
  signed: boolean
  handleLoginResult: (email: string, name: string, token: string) => Promise<void>
  signOut: () => void
  loading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(getTokenFromStorage())
  const [loading, setLoading] = useState(true)
  const navigation = useNavigate()

  function getTokenFromStorage() {
    const storagedToken = localStorage.getItem('@Auth:token')
    const storagedUser = localStorage.getItem('@Auth:user')

    console.log('storagedToken', storagedToken)

    if (storagedToken && storagedUser) {
      const user = {
        email: JSON.parse(storagedUser).email,
        name: JSON.parse(storagedUser).name,
        token: storagedToken,
      }
      return user
    }
    return null
  }

  async function handleLoginResult(email: string, name: string, token: string) {
    console.log(token)
    setUser({
      email,
      name,
      token,
    })
    localStorage.setItem('@Auth:token', token)
    localStorage.setItem('@Auth:user', JSON.stringify({ email, name }))
  }

  function signOut() {
    localStorage.removeItem('@Auth:user')
    localStorage.removeItem('@Auth:token')
    setUser(null)
    navigation('/login')
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, handleLoginResult, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
