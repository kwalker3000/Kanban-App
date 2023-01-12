import React, { useEffect } from 'react'
import { Theme } from '../@types/app'
import { Task, Board } from '../@types/board'
import { PopupStateType } from '../../lib/initialStates'

//Components
import { TaskForm } from '../components/Forms/TaskForm'
import { SubtaskForm } from '../components/Forms/SubtaskForm'
import { BoardForm } from '../components/Forms/BoardForm'
import { Remove } from '../components/Forms/Remove'

type PopupProps = {
  theme: Theme
  actionKanban: (type: string, key: string, value: string | Board) => void
  actionBoard: (type: string, key: string, value: Task | string) => void
  board: Board
  boardName?: string | false
  boardList: string[]
  handleActiveBoard: (index: number) => void
  closePopup: (exception?: boolean) => void
  openPopup: (key: string, isNewBoard: boolean, objToDelete?: string) => void
  task: Task | false
  taskObj: Task
  nextTaskId: number
  // closePopup: () => void
  // actionKanban: (type: string, key: string, value: string) => void
  // closePopup: () => void
  isPopupOpen: PopupStateType
}

export const Popup = ({
  theme,
  actionKanban,
  actionBoard,
  board,
  boardList,
  boardName,
  handleActiveBoard,
  closePopup,
  openPopup,
  task, //task vs taskObj?
  taskObj,
  nextTaskId,
  isPopupOpen,
}: PopupProps) => {
  useEffect(() => {
    actionKanban('UPDATE BOARD', '', board)
  }, [board])
  return (
    <>
      {isPopupOpen.taskPopup && (
        <TaskForm
          theme={theme}
          actionBoard={actionBoard}
          actionKanban={actionKanban}
          closePopup={closePopup}
          board={board}
          taskObj={taskObj}
          nextTaskId={nextTaskId}
        />
      )}
      {isPopupOpen.subtaskPopup && (
        <SubtaskForm
          theme={theme}
          actionBoard={actionBoard}
          closePopup={closePopup}
          openPopup={openPopup}
          taskObj={taskObj} //task
        />
      )}
      {isPopupOpen.boardPopup.isOpen && (
        <BoardForm
          theme={theme}
          actionKanban={actionKanban}
          actionBoard={actionBoard}
          boardList={boardList}
          boardName={!isPopupOpen.boardPopup.isNew && boardName}
          isNew={isPopupOpen.boardPopup.isNew}
          closePopup={closePopup}
        />
      )}
      {(isPopupOpen.removePopup.isBoard || isPopupOpen.removePopup.isTask) && (
        <Remove
          theme={theme}
          actionKanban={actionKanban}
          actionBoard={actionBoard}
          board={board}
          boardList={boardList}
          handleActiveBoard={handleActiveBoard}
          closePopup={closePopup}
          task={isPopupOpen.removePopup.isTask && task}
        />
      )}
    </>
  )
}
