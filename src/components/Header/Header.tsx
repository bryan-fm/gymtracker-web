import { Burger, Button, Drawer, Group, NavLink, Stack, Text } from '@mantine/core'
import './header.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="header">
      <Group justify="space-between" align="center" w="100%" h="100%">
        <Group hiddenFrom="sm">
          <Burger opened={drawerOpened} onClick={() => setDrawerOpened(!drawerOpened)} size="sm" />
        </Group>

        <Group visibleFrom="sm">
          <Button variant="default">Entrar</Button>
          <Button>Cadastrar</Button>
        </Group>
      </Group>

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
            <NavLink label="Dietas" />
            <NavLink label="Entrar" />
            <NavLink label="Cadastrar" />
          </Stack>
        </Group>
      </Drawer>
    </header>
  )
}
