import React, { FC } from 'react'
import { Header } from '../Header/Header'
import { AppShell, Group } from '@mantine/core'

const Layout: FC = ({ children }: any) => {
  return (
    <AppShell header={{ height: '60px' }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main style={{ display: 'flex', flexDirection: 'column' }}>{children}</AppShell.Main>
    </AppShell>
  )
}

export default Layout
