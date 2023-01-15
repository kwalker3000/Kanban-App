import React, {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react'

// Types
import { Theme } from '../@types/app'
import { Kanban, Board, Task } from '../@types/board'

// Use Hooks
import { useKanban } from '../hooks/useKanban'
import { useBoard } from '../hooks/useBoard'

// Initial State Values
import { initKanban } from '../../lib/initialStates'

// Database handles
import { saveKanban } from '../../lib/saveKanban'

type ContextType = {
  theme: Theme
  kanban: Kanban
  board: Board
  handleActiveBoard: (index: number) => void
  boardList: string[]
  toggleTheme: () => void
  actionKanban: (type: string, key: string, value: string | Board) => void
  actionBoard: (type: string, key: string, value: Task | Board | string) => void
  updateUserId: (id: string) => void
  userId: string | null
}

const AppContext = createContext<ContextType>({} as ContextType)

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props): JSX.Element => {
  // TODO handle duplicate task, subtasks
  // update* should be ok.
  // tasks have unique ids and subtasks indexed in an immutable array
  const [theme, setTheme] = useState<Theme>('dark')
  const [kanban, dispatch] = useReducer(useKanban, initKanban)
  const [board, setBoard] = useReducer(useBoard, kanban[0])
  const [userId, setUserId] = useState<string | null>(null)

  let list = kanban.map((board) => board.name)
  const [boardList, setBoardList] = useState(list)

  let toggleTheme = () => {
    setTheme((curTheme) => (curTheme == 'dark' ? 'light' : 'dark'))
  }

  let actionKanban = (
    type: string,
    key: string,
    value: string | Board | Kanban
  ) => {
    dispatch({
      type: type,
      payload: { key, value },
    })
  }

  let actionBoard = (
    type: string,
    key: string,
    value: Task | Board | string
  ) => {
    setBoard({
      type,
      payload: { key, value },
    })
  }
  let updateUserId = (id: string) => {
    setUserId(id)
  }

  let handleActiveBoard = (index: number) => {
    actionBoard('INITIALIZE BOARD', '', kanban[index])
  }
  useEffect(() => {
    let isCancelled = false
    let list = kanban.map((board) => board.name)
    setBoardList((prev) => list)

    let saveToDatabase = () => {
      setTimeout(() => {
        if (!isCancelled) {
          if (userId) {
            saveKanban(userId, kanban)
          }
        }
      }, 5000)
    }
    saveToDatabase()
    return () => {
      isCancelled = true
    }
  }, [kanban, userId])

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        kanban,
        actionKanban,
        actionBoard,
        board,
        handleActiveBoard,
        boardList,
        updateUserId,
        userId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
