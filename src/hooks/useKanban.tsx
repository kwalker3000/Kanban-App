import React from 'react'
import { Kanban, Board } from '../@types/board'

export const useKanban = (state: Kanban, action: any): Kanban => {
  let { key, value } = action.payload

  switch (action.type) {
    case 'INITIALIZE KANBAN':
      return value
    case 'CREATE NEW BOARD':
      let id = Math.max(...state.map((board) => board.id)) + 1
      let newBoard: Board = {
        id,
        name: value,
        tasks: [],
      }
      return [...state, newBoard]

    case 'UPDATE BOARD': {
      let testBoard = state.find((board) => board.id == value.id)
      let boardIndex = state.findIndex((board) => board.id == value.id)
      let updatedBoards = state.filter((board, index) => index !== boardIndex)
      updatedBoards.splice(boardIndex, 0, value)

      return updatedBoards
    }
    case 'DELETE BOARD': {
      let boards = state.filter((board) => board.id !== value.id)
      return boards
    }
    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
