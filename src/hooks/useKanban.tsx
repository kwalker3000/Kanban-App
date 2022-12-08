import React, { useReducer } from 'react'
import { Kanban } from '../@types/board'

export const useAddress = () => {
  let initialState: Kanban = [
    {
      name: 'New Project',
    },
  ]

  const reducer = (state: Kanban, action) => {
    switch (action.type) {
      case 'CREATE NEW BOARD':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        }
      case 'EDIT BOARD':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        }

      case 'DELETE BOARD':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        }
      case 'CREAT NEW TASK':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        }
      case 'EDIT TASK':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        }
      case 'DELETE NEW TASK':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        }
      // case 'CREATE NEW SUBTASK':  // try first with using task logic
      //   return {
      //     ...state,
      //     [action.payload.key]: action.payload.value,
      //   }

      default:
        throw new Error(`Unknown action ${action.type}`)
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleBoad

  const handleTask

  const inputAction = (event) => {
    dispatch({
      type: 'UPDATE',
      payload: { key: event.target.name, value: event.target.value },
    })
  }

  const replaceAction = (city) => {
    dispatch({
      type: 'REPLACE CITY',
      payload: { key: 'city', value: city },
    })
  }

  const setAction = (name, value) => {
    dispatch({
      type: 'SET VALUE',
      payload: { key: name, value: value },
    })
  }

  return [state, { inputAction, replaceAction, setAction }]
}
