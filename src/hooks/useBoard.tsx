import React, { useReducer } from 'react'
import { Board } from '../@types/board'

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
    case 'CREATE NEW TASK': {
      let taskArray = state.tasks.filter((task) => task.id != value.id)
      return {
        ...state,
        [key]: [...taskArray, value],
      }
    }
    case 'EDIT TASK':
      //TODO when edit large task bodies it extends past boundaries
      // currently fix is to limit number of subtasks to 4
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
      let taskIndex = state.tasks.findIndex((task) => task.id == value.id)
      let updatedTasks = state.tasks.filter(
        (task, index) => index !== taskIndex
      )
      updatedTasks.splice(taskIndex, 0, value)

      return {
        ...state,
        [key]: updatedTasks,
      }
    }

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
