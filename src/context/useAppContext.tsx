import React, { useState, createContext, useContext } from 'react'
import { Theme } from '../@types/app'
import { Kanban } from '../@types/board'

type ContextType = {
  theme: Theme
  kanban: Kanban
  toggleTheme: (theme: Theme) => void
}

const AppContext = createContext<ContextType>({
  theme: 'dark',
  kanban: [{ name: 'my project' }],
  toggleTheme: () => {},
})

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>('dark') // TODO systems default
  const [kanban, setKanban] = useState<Kanban>([{ name: 'my project' }])

  let toggleTheme = () => {
    setTheme((curTheme) => (curTheme == 'dark' ? 'light' : 'dark'))
  }
  return (
    <AppContext.Provider value={{ theme, toggleTheme, kanban }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
