import { Task } from '../src/@types/board'

export type PopupStateType = {
  taskPopup: boolean
  subtaskPopup: boolean
  boardPopup: {
    isOpen: boolean
    isNew: boolean
  }
  removePopup: {
    isTask: boolean
    isBoard: boolean
  }
  sidebarPopup: boolean
}
export const initPopupState: PopupStateType = {
  taskPopup: false,
  subtaskPopup: false,
  boardPopup: {
    isOpen: false,
    isNew: false,
  },
  removePopup: {
    isTask: false,
    isBoard: false,
  },
  sidebarPopup: false,
}

export const initErrorStatesBoard = {
  isEmptyError: false,
  isDuplicateError: false,
}

export const initErrorStatesTask = {
  isTitleError: false,
  isDescriptionError: false,
  isSubtaskError: false,
}

export const initTaskState: Task = {
  id: -1,
  title: '',
  description: '',
  status: 'todo',
  subtasks: [],
}
