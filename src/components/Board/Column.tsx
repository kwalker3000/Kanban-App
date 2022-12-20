import React from 'react'
import { Theme } from '../../@types/app'
import { Board } from '../../@types/board'

// Components
import { Task } from './Task'

type ColumnProps = {
  theme: Theme
  currentBoard: Board
}

export const Column = ({ theme, currentBoard }: ColumnProps) => {
  //loop over each status
  // let todo = currentBoard.todoCol.tasks.map((task, index)...)

  let test = ['a', 'b', 'c', 'd'].map((task, index) => {
    return (
      <div key={index} className="column__task-wrapper">
        <Task theme={theme} />
      </div>
    )
  })

  return (
    <div className={`column column_${theme}`}>
      <div className="column__head">
        <div className={`status_theme`}></div>
        <h3 className="head_level-4">status</h3>
      </div>
      {test}
    </div>
  )
}
