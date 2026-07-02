import { Burger, Button, Drawer, Group, NavLink, Stack, Text } from '@mantine/core'
import './header.css'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext, useAuth } from '../../context/AuthContext'

export function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const { user, signOut } = useContext(AuthContext)

  useEffect(() => {
    console.log(user)
    if (user?.token) {
      setIsLoggedIn(true)
      return
    }
    setIsLoggedIn(false)
  }, [user])

  return (
    <header className="header">
      {!isLoggedIn ? (
        <Group justify="space-between" align="center" w="100%" h="100%">
          <Group hiddenFrom="sm">
            <Burger
              opened={drawerOpened}
              onClick={() => setDrawerOpened(!drawerOpened)}
              size="sm"
            />
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" onClick={() => navigate('/login')}>
              Entrar
            </Button>
            <Button onClick={() => navigate('/register')}>Cadastrar</Button>
          </Group>
        </Group>
      ) : (
        <Group>
          <Button variant="default" onClick={() => navigate('/profile')}>
            {user?.name}
          </Button>
          <Button onClick={() => signOut()}>Sair</Button>
        </Group>
      )}

      <Group className="centerMenu" visibleFrom="sm">
        <Link to="/" className="link">
          <Text c="gray">HOME</Text>
        </Link>
        <Link to="/workouts" className="link">
          <Text c="gray">TREINO</Text>
        </Link>
        <a href="#" className="link">
          <Text c="gray">DIETAS</Text>
        </a>
      </Group>

      <Drawer opened={drawerOpened} onClose={() => setDrawerOpened(false)} size="70%" padding="md">
        <Group grow>
          <Stack>
            <NavLink label="Home" onClick={() => navigate('/')} />
            <NavLink label="Treino" onClick={() => navigate('/workouts')} />
            <NavLink label="Dietas" onClick={() => navigate('/diets')} />
          </Stack>
        </Group>
      </Drawer>
    </header>
  )
}
