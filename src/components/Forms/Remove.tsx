import React from 'react'
import { Theme } from '../../@types/app'
import { Board, Task } from '../../@types/board'

//Components
import { RemoveBtn } from './RemoveBtn'

type RemoveProps = {
  theme: Theme
  // board: Board
  closePopup: () => void
  actionKanban: (type: string, key: string, value: string | Board) => void
  actionBoard: (type: string, key: string, value: Task) => void
  board: Board
  task: Task | false
  boardList: string[]
  handleActiveBoard: (index: number) => void
}

export const Remove = ({
  theme,
  actionKanban,
  actionBoard,
  board,
  task,
  boardList,
  handleActiveBoard,
  closePopup,
}: RemoveProps) => {
  let handleClick = (action: string) => {
    if (action == 'DELETE') {
      if (task) {
        actionBoard('DELETE TASK', 'tasks', task)
      } else {
        let nextBoard = boardList[0] == board.name ? 1 : 0
        if (boardList.length == 1) {
          actionKanban('DELETE BOARD', 'boards', board)
        } else {
          actionKanban('DELETE BOARD', 'boards', board)
          handleActiveBoard(nextBoard)
        }
      }
    }
    closePopup()
  }
  return (
    <div id="remove">
      <div className={`remove remove_${theme}`}>
        <div className="remove__head">
          <h2 className={`head_level-2 header_${theme}`}>
            Delete this {task ? 'task' : 'board'}
          </h2>
        </div>
        <div className="remove__body">
          <p className="body_level-1">
            Are you sure you want to delete the ‘
            {task ? task.title : board.name}’ {task ? 'task' : 'board'}? This
            action will remove all columns and tasks and cannot be reversed.
          </p>
        </div>
        <div className="remove__btn-wrapper">
          <RemoveBtn
            theme={theme}
            btnText="delete"
            action="DELETE"
            handleClick={handleClick}
          />
          <RemoveBtn
            theme={theme}
            btnText="cancel"
            action="CANCEL"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}
