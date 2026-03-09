import React, { FC } from 'react'
import { Header } from '../Header/Header'
import { AppShell, Group } from '@mantine/core'

const Layout: FC = ({ children }: any) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default Layout
