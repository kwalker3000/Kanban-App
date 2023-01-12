import React from 'react'
import { Kanban, Board } from '../@types/board'

export const useKanban = (state: Kanban, action: any): Kanban => {
  let { key, value } = action.payload

  switch (action.type) {
    case 'CREATE NEW BOARD':
      let id = state.length + 1
      let newBoard: Board = {
        id,
        name: value,
        tasks: [],
      }
      return [...state, newBoard]
    // case 'EDIT BOARD NAME': {
    //   let name = value

    // }

    case 'UPDATE BOARD': {
      let boardIndex = state.findIndex((board) => board.id == value.id)
      let updatedBoards = state.filter((board, index) => index !== boardIndex)
      updatedBoards.splice(boardIndex, 0, value)

      return updatedBoards
    }
    case 'DELETE BOARD': {
      let boards = state.filter((board) => board.id !== value.id)
      if (boards.length == 0) {
        let newBoard: Board = {
          id: 1,
          name: 'New Board',
          tasks: [],
        }
        return [newBoard]
      }
      return boards
    }
    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
