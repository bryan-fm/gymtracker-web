import { useMutation } from '@apollo/client/react'
import LogoName from '../../components/LogoName/LogoName'
import { LOGIN, LoginResponse } from './login'
import styles from './login.module.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { LoadingOverlay } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  const [login, { loading, error, data }] = useMutation<LoginResponse>(LOGIN)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { handleLoginResult, user } = useContext(AuthContext)
  const navigation = useNavigate()

  useEffect(() => {
    if (user?.token) {
      console.log('User already logged in, redirecting to workouts page...')
      navigation('/workouts')
    }
  }, [user, navigation])

  if (loading) return <LoadingOverlay />

  const handleLogin = async () => {
    let data = null
    try {
      data = await login({
        variables: {
          input: {
            email: username,
            password: password,
          },
        },
      })
    } catch (err) {
      console.error(err)
    }

    if (data) {
      console.log(data.data.login)
      handleLoginResult(data.data.login.email, data.data.login.name, data.data.login.token)
    }
  }
  return (
    <>
      <section className={styles.container}>
        <LogoName />
        <section className={styles.section}>
          <div className={styles.form}>
            <text className={styles.text}>Login:</text>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <text className={styles.text}>Password:</text>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} onClick={handleLogin}>
              Login
            </button>
          </div>
        </section>
      </section>
    </>
  )
}

export default LoginPage
