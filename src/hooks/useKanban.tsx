import React, { useReducer } from 'react'
import { Kanban, Board } from '../@types/board'

export const useKanban = (state: Kanban, action: any): Kanban => {
  let { key, value } = action.payload

  switch (action.type) {
    case 'CREATE NEW BOARD':
      let newBoard: Board = {
        name: value,
        tasks: [],
      }
      return [...state, newBoard]

    case 'UPDATE BOARD': {
      let index
      for (let i = 0; i < state.length; i++) {
        if (state[i].name == value.name) {
          index = i
        }
      }
      let boards = [...state]
      boards[index] = value
      return boards
    }
    case 'DELETE BOARD':
      return {
        ...state,
        [key]: value,
      }

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
