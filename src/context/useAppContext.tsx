import React, { useState, createContext, useContext, useReducer } from 'react'
import { Theme } from '../@types/app'
import { Kanban, Task, Board } from '../@types/board'
import { useKanban } from '../hooks/useKanban'

type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>

type BoardObj = Task

type ContextType = {
  theme: Theme
  kanban: Kanban
  toggleTheme: (theme: Theme) => void
  // setKanban: (type: string, name: string, e: InputEvent) => void
  setKanban: (type: string, key: string, value: BoardObj) => void
  // setKanban: setKanban
}

// sets initial values
// const AppContext = createContext<ContextType>({
//   theme: 'dark',
//   // toggleTheme: () => {},
//   // setKanban: () => {},
//   kanban: Kanban,
// })
const AppContext = createContext<ContextType>({} as ContextType)

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props): JSX.Element => {
  let initialState: Kanban = [
    {
      name: 'New Project',
      todoCol: {
        status: 'todo',
        tasks: [],
      },
      doingCol: {
        status: 'doing',
        tasks: [],
      },
      doneCol: {
        status: 'done',
        tasks: [],
      },
    },
    {
      name: 'New Project 2',
      todoCol: {
        status: 'todo',
        tasks: [],
      },
      doingCol: {
        status: 'doing',
        tasks: [],
      },
      doneCol: {
        status: 'done',
        tasks: [],
      },
    },
  ]
  const [theme, setTheme] = useState<Theme>('dark') // TODO systems default
  const [kanban, dispatch] = useReducer(useKanban, initialState)

  let toggleTheme = () => {
    setTheme((curTheme) => (curTheme == 'dark' ? 'light' : 'dark'))
  }

  let setKanban = (type: string, key: string, value: BoardObj) => {
    console.log(value)
    dispatch({
      type: type,
      payload: { key, value },
    })
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme, kanban, setKanban }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
