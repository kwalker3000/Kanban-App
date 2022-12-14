import React from 'react'
import { Subtask } from '../@types/board'

export const useSubtask = (state: Subtask[], action: any): Subtask[] => {
  let { key, value } = action.payload
  value = value.target.value

  switch (action.type) {
    // default new tasks to todo column and disable status choice
    case 'ADD SUBTASK':
      let subtask: Subtask = {
	description: '',
	status: 'todo'
      }
      return [
         ...state,
        subtask
        // [key]: value,
      ]
    case 'EDIT SUBTASK':
      value = value.target.value
      let tempSubtasks = [...state]
tempSubtasks[0] = { ...tempSubtasks[0], [key]: value}
      return [
        state[0],
	[key]: [value]
        // [key]: value,
      ]
    case 'REMOVE SUBTASK':
      return {
        ...state,
        subtasks: state.subtasks.filter((subtask, index) => index !== value),
        // [key]: value,
      }
    case 'EDIT SUBTASK':
      return {
        ...state,
        [key]: value,
      }
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
