import React from 'react'
import { Task, Subtask } from '../@types/board'

type Action = {
  type: string
  payload: { key: string; value: any; index: number }
}
export const useTask = (state: Task, action: Action): Task => {
  let { key, value, index } = action.payload

  switch (action.type) {
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
      }
    case 'EDIT SUBTASK':
      value = value.target.value
      let subtasksCopy = [...state.subtasks]
      subtasksCopy[index] = { ...subtasksCopy[index], [key]: value }
      return {
        ...state,
        subtasks: subtasksCopy,
      }
    case 'REMOVE SUBTASK':
      return {
        ...state,
        subtasks: state.subtasks.filter((subtask, index) => index !== value),
      }
    case 'UPDATE STATUS':
      value = value.target.value.toLowerCase()
      return {
        ...state,
        [key]: value,
      }

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
