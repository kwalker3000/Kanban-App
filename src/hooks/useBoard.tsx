import React, { useReducer } from 'react'
import { Kanban, Board, Task } from '../@types/board'

// there is problem when setting value type to Task | Board
// will work fine with only Task but conflicts arise when
// Board is added. And Board is neccessary for 'INITIALIZE BOARD'
// which gets called when changing boards
type Action = {
  type: string
  payload: { key: string; value: any }
}

export const useBoard = (state: Board, action: Action): Board => {
  let { key, value } = action.payload

  switch (action.type) {
    case 'INITIALIZE BOARD':
      return value
    case 'CREATE NEW TASK':
      return {
        ...state,
        [key]: [...state.tasks, value],
      }
    case 'EDIT TASK':
      return {
        ...state,
        [key]: value,
      }
    case 'DELETE TASK': {
      let taskArray = state.tasks.filter((task) => task.id != value.id)
      return {
        ...state,
        [key]: taskArray,
      }
    }
    case 'UPDATE TASK': {
      let task = state.tasks.find((task) => task.id == value.id)!
      let check = task.subtasks.every(
        (subtask, index) => subtask.status == value.subtasks[index].status
      )
      if (check) {
        return state
      }
      let updatedTasks = state.tasks.filter((task) => task.id != value.id)
      updatedTasks.push(value)
      return {
        ...state,
        [key]: updatedTasks,
      }
    }

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
