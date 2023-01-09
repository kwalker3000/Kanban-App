import React, { useState, createContext, useContext, useReducer } from 'react'
import { Theme } from '../@types/app'
import { Kanban, Board } from '../@types/board'
import { useKanban } from '../hooks/useKanban'
import data from '../../lib/testData'

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
  // TODO handle duplicate boards, task, subtasks
  const [theme, setTheme] = useState<Theme>('dark')
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
