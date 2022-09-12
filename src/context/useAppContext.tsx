import React, { useState, createContext, useContext } from 'react'
import { Theme, ContextType } from '../@types/app'

type Status = 'todo' | 'doing' | 'done'
type Subtas = {
  description: string
  status: Status
}

type Task = {
  title: string
  description: string
  status: Status
  subtasks: Subtas[]
}

type Column = {
  title: Status
  tasks: Task[]
}

type Board = {
  name: string
  todo: Column
  doing?: Column
  done?: Column
}

type Kanban = Board[]

const AppContext = createContext<ContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>('dark') // TODO systems default
  const [kanban, setKanban] = useState<Kanban>()

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
