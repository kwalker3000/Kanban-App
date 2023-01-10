import React, { useState, useEffect } from 'react'
import { Theme } from '../../@types/app'
import { Task as TaskType, Status } from '../../@types/board'

// Components
import { Task } from './Task'

type ColumnProps = {
  theme: Theme
  openPopup: (key: string) => void
  updateSubtaskEditKey: (status: Status, i: number) => void
  taskArray: TaskType[]
}

export const Column = ({
  theme,
  taskArray,
  openPopup,
  updateSubtaskEditKey,
}: ColumnProps) => {
  let tasks = taskArray.map((task, index) => {
    return (
      <div
        key={index}
        onClick={() => handleClick(task.status, task.id)}
        className="column__task-wrapper"
        tabIndex={0}
      >
        <Task theme={theme} task={task} />
      </div>
    )
  })
  let handleClick = (status: Status, index: number) => {
    openPopup('subtaskPopup')
    updateSubtaskEditKey(status, index)
  }

  return (
    <div className={`column column_${theme}`}>
      <div className="column__head">
        <div className={`status_theme`}></div>
        <h3 className="head_level-4">{taskArray[0].status}</h3>
      </div>
      {tasks}
    </div>
  )
}

// TODO centering new empty board for large devices
