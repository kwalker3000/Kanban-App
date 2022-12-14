import React from 'react'
import { Task, Subtask } from '../@types/board'

export const useTask = (state: Task, action: any): Task => {
  let { key, value, index } = action.payload
  console.log(index)

  switch (action.type) {
    // default new tasks to todo column and disable status choice
    case 'CREATE NEW TASK':
      return {
        ...state,
        [key]: value,
      }
    case 'EDIT TASK':
      value = value.target.value
      return {
        ...state,
        [key]: value,
      }
    case 'REMOVE TASK':
      return {
        ...state,
        [key]: value,
      }
    case 'ADD SUBTASK':
      let newSubtask: Subtask = {
        description: '',
        status: 'todo',
      }
      return {
        ...state,
        subtasks: [...state.subtasks, newSubtask],
        // [key]: value,
      }
    case 'EDIT SUBTASK':
      value = value.target.value
      let subtasksCopy = [...state.subtasks]
      subtasksCopy[index] = { ...subtasksCopy[index], [key]: value }
      return {
        ...state,
        subtasks: subtasksCopy,
        // [key]: value,
      }
    case 'REMOVE SUBTASK':
      return {
        ...state,
        subtasks: state.subtasks.filter((subtask, index) => index !== value),
        // [key]: value,
      }
    case 'UPDATE STATUS':
      value = value.target.value
      return {
        ...state,
        [key]: value,
      }
    // case 'EDIT SUBTASK': // subtask hook will handle
    //   return state

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState)

  // const handleBoad

  // const handleTask

  // const inputAction = (event) => {
  //   dispatch({
  //     type: 'UPDATE',
  //     payload: { key: event.target.name, value: event.target.value },
  //   })
  // }

  // const replaceAction = (city) => {
  //   dispatch({
  //     type: 'REPLACE CITY',
  //     payload: { key: 'city', value: city },
  //   })
  // }

  // return [state, { setAction }]
}

// let initialState: Kanban = [
//   {
//     name: 'New Project',
//   },
// ]

// type setAction = {
//   type: string
//   name: string
//   value: string
// }

// export const setAction = (type: string, name: string, value: string) => {
//   dispatch({
//     type: type,
//     payload: { key: name, value: value },
//   })
// }
