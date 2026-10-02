import { createContext, ReactNode, useState, useEffect, useContext, useRef } from 'react'
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

// 1 hora em milissegundos
const TTL_IN_MS = 60 * 60 * 1000

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigate()

  // useRef armazena a referência do timer para podermos limpá-lo facilmente
  // No navegador, o setTimeout retorna um ID que é do tipo 'number'
  const timeoutRef = useRef<number | null>(null)

  // Função para programar o logout automático baseado no tempo restante
  function scheduleSignOut(timeRemaining: number) {
    // Limpa qualquer timer existente antes de criar um novo
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      forceSignOut()
    }, timeRemaining)
  }

  // Desloga e redireciona (usado no timer e no botão de sair)
  function forceSignOut() {
    clearStorage()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setUser(null)
    navigation('/login')
  }

  function clearStorage() {
    localStorage.removeItem('@Auth:user')
    localStorage.removeItem('@Auth:token')
    localStorage.removeItem('@Auth:expires_at')
  }

  // Verifica o storage apenas no carregamento inicial da aplicação
  useEffect(() => {
    function loadStorageData() {
      const storagedToken = localStorage.getItem('@Auth:token')
      const storagedUser = localStorage.getItem('@Auth:user')
      const storagedExpiry = localStorage.getItem('@Auth:expires_at')

      if (storagedToken && storagedUser && storagedExpiry) {
        const now = new Date().getTime()
        const expiryTime = Number(storagedExpiry)
        const timeRemaining = expiryTime - now

        // Verifica se o token já expirou
        if (timeRemaining <= 0) {
          clearStorage()
          setUser(null)
        } else {
          // Token válido: restaura o usuário e agenda o logout com o tempo que sobra
          const parsedUser = JSON.parse(storagedUser)
          setUser({
            email: parsedUser.email,
            name: parsedUser.name,
            token: storagedToken,
          })
          scheduleSignOut(timeRemaining)
        }
      }
      setLoading(false)
    }

    loadStorageData()

    // Cleanup: limpa o timer se o componente AuthProvider for desmontado
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  async function handleLoginResult(email: string, name: string, token: string) {
    const expiryTime = new Date().getTime() + TTL_IN_MS

    setUser({
      email,
      name,
      token,
    })

    localStorage.setItem('@Auth:token', token)
    localStorage.setItem('@Auth:user', JSON.stringify({ email, name }))
    localStorage.setItem('@Auth:expires_at', String(expiryTime))

    // Agenda o logout para daqui a 1 hora exata
    scheduleSignOut(TTL_IN_MS)
  }

  function signOut() {
    forceSignOut()
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
