import React from 'react'
import { Theme } from '../../@types/app'
import { Task as TaskType } from '../../@types/board'

type TaskProps = {
  theme: Theme
  // task: TaskType
}

// export const Task = ({ theme, task }: TaskProps) => {
export const Task = ({ theme }: TaskProps) => {
  return (
    <div className={`task task_${theme}`}>
      <div className="task__head">
        <p className="title head_level-3">This is a Title of</p>
      </div>
      <div className="task__sub">
        <p className="body body_level-2">subtasks</p>
      </div>
    </div>
  )
}
