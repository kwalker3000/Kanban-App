import React, { useState, useEffect } from 'react'
import { Theme } from '../../@types/app'
import { Board as BoardType, Task, Status } from '../../@types/board'

// Components
import { AddColumn } from './AddColumn'
import { Column } from './Column'

type BoardProps = {
  theme: Theme
  board: BoardType
  openPopup: (key: string) => void
  updateSubtaskEditKey: (status: Status, i: number) => void
}

export const Board = ({
  theme,
  board,
  openPopup,
  updateSubtaskEditKey,
}: BoardProps) => {
  const [isNewBoard, setIsNewBoard] = useState(true)

  let sortTasks = (board: BoardType) => {
    let col: { [id: string]: [Task] } = {}
    for (let task of board.tasks) {
      if (task.status in col) {
        col[task.status].push(task)
      } else {
        col[task.status] = [task]
      }
    }
    return col
  }
  useEffect(() => {
    if (board.tasks.length > 0) {
      setIsNewBoard(false)
    } else {
      setIsNewBoard(true)
    }
  }, [board.tasks])

  let getColumns = () => {
    let cols = sortTasks(board)
    let col = ['todo', 'doing', 'done'] //TODO make dynamic
    let columns: JSX.Element[] = []
    let index = 0

    for (let c of col) {
      if (c in cols) {
        let element: JSX.Element = (
          <div key={index} className="board__column-wrapper">
            <Column
              taskArray={cols[c]}
              theme={theme}
              openPopup={openPopup}
              updateSubtaskEditKey={updateSubtaskEditKey}
            />
          </div>
        )
        columns.push(element)
        index++
      }
    }
    return columns
  }
  getColumns()

  return (
    <div id="board">
      <div className={`board board_${theme}`}>
        {<>{getColumns()}</>}
        <div className="board__add-column-wrapper">
          {isNewBoard ? (
            <AddColumn
              theme={theme}
              isNewBoard={isNewBoard}
              openPopup={openPopup}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

// Currently the ability to add and remove whole columns
// has been removed. It is not a necessary feature of the app
// so may or may not add it later
