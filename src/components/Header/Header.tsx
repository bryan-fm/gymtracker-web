import { IconBarbell } from '@tabler/icons-react'
import {
  Anchor,
  Box,
  Burger,
  Button,
  Drawer,
  Group,
  NavLink,
  Text,
  useMantineTheme,
} from '@mantine/core'
import './header.css'
import { useMedia } from 'use-media'
import { useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'

export function HeaderMegaMenu() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const theme = useMantineTheme()

  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Box pos="relative">
      <header className="header">
        <Group justify="space-between" h="100%">
          <IconBarbell size={30} />
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
                  <NavLink label="Home" />
                  <NavLink label="Treino" />
                  <NavLink label="Dietas" />
                  <NavLink label="Login" />
                  <NavLink label="Sign Up" />
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
                <a href="#" className="link">
                  <Text c="gray">HOME</Text>
                </a>
                <a href="#" className="link">
                  <Text c="gray">TREINO</Text>
                </a>
                <a href="#" className="link">
                  <Text c="gray">DIETAS</Text>
                </a>
              </Group>
              <Group visibleFrom="sm">
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </Group>
            </>
          )}
        </Group>
      </header>
    </Box>
  )
}
