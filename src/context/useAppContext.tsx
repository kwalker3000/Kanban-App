import React, { useState, createContext, useContext, useReducer } from 'react'
import { Theme } from '../@types/app'
import { Kanban, Task, Board } from '../@types/board'
import { useKanban } from '../hooks/useKanban'
import data from '../../lib/testData'

// type InputEvent =
//   | React.ChangeEvent<HTMLInputElement>
//   | React.ChangeEvent<HTMLTextAreaElement>
//   | React.ChangeEvent<HTMLSelectElement>

// type BoardObj = Task

type ContextType = {
  theme: Theme
  kanban: Kanban
  activeBoard: Board
  handleActiveBoard: (index: number) => void
  boardList: string[]
  toggleTheme: () => void
  actionKanban: (type: string, key: string, value: string | Board) => void
}

const AppContext = createContext<ContextType>({} as ContextType)

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props): JSX.Element => {
  // let initialState: Kanban = [
  //   {
  //     name: 'New Project',
  //     tasks: [],
  //   },
  //   {
  //     name: 'New Project 2',
  //     tasks: [],
  //   },
  // ]

  // TODO handle duplicate boards, task, subtasks
  const [theme, setTheme] = useState<Theme>('dark') // TODO systems default
  const [kanban, dispatch] = useReducer(useKanban, data)
  const [activeBoard, setActiveBoard] = useState<Board>(kanban[1])

  let toggleTheme = () => {
    setTheme((curTheme) => (curTheme == 'dark' ? 'light' : 'dark'))
  }

  let actionKanban = (type: string, key: string, value: string | Board) => {
    dispatch({
      type: type,
      payload: { key, value },
    })
  }
  let boardList = kanban.map((board) => board.name)

  let handleActiveBoard = (index: number) => {
    setActiveBoard(kanban[index])
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        kanban,
        actionKanban,
        activeBoard,
        handleActiveBoard,
        boardList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
