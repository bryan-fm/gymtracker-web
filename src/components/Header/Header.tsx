import { IconBarbell } from '@tabler/icons-react'
import { Box, Burger, Button, Drawer, Group, NavLink, Text, useMantineTheme } from '@mantine/core'
import './header.css'
import { useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const navigate = useNavigate()

  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Box pos="relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="header">
        <Group justify="space-between" h="100%">
          {isMobile ? (
            <Burger opened={drawerOpened} onClick={() => setDrawerOpened(!drawerOpened)} size="sm">
              <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                size="30%"
                padding="md"
                style={{ flexDirection: 'row' }}
              >
                <Group>
                  <NavLink label="Home" onClick={() => navigate('/')} />
                  <NavLink label="Treino" onClick={() => navigate('/workouts')} />
                  <NavLink label="Dietas" />
                  <NavLink label="Entrar" />
                  <NavLink label="Cadastrar" />
                </Group>
              </Drawer>
            </Burger>
          ) : (
            <>
              <Group
                h="100%"
                gap={0}
                visibleFrom="sm"
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <a href="/" className="link">
                  <Text c="gray">HOME</Text>
                </a>
                <a href="/workouts" className="link">
                  <Text c="gray">TREINO</Text>
                </a>
                <a href="#" className="link">
                  <Text c="gray">DIETAS</Text>
                </a>
              </Group>
              <Group visibleFrom="sm">
                <Button variant="default">Entrar</Button>
                <Button>Cadastrar</Button>
              </Group>
            </>
          )}
          <IconBarbell size={30} />
        </Group>
      </header>
    </Box>
  )
}
