import React, { useReducer } from 'react'
import { Kanban, Board } from '../@types/board'

export const useKanban = (state: Kanban, action: any): Kanban => {
  let { key, value } = action.payload
  console.log(value)

  switch (action.type) {
    case 'CREATE NEW BOARD':
      return {
        ...state,
        [key]: value,
      }
    case 'EDIT BOARD':
      return {
        ...state,
        [key]: value,
      }

    case 'DELETE BOARD':
      return {
        ...state,
        [key]: value,
      }
    // default new tasks to todo column and disable status choice
    case 'CREATE NEW TASK':
      return {
        ...state,
        [key]: value,
      }
    case 'EDIT TASK':
      return {
        ...state,
        [key]: value,
      }
    case 'DELETE NEW TASK':
      return {
        ...state,
        [key]: value,
      }
    // case 'CREATE NEW SUBTASK':  // try first with using task logic
    //   return {
    //     ...state,
    //     [key]: value,
    //   }

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
