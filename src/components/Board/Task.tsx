import React from 'react'
import { Theme } from '../../@types/app'
import { Task as TaskType } from '../../@types/board'

type TaskProps = {
  theme: Theme
  task: TaskType
}

export const Task = ({ theme, task }: TaskProps) => {
  // TODO seek way to fix redundent status checks
  let getSubtasksCompleted = () => {
    let subtasksCompleted = 0
    for (let subtask of task.subtasks) {
      if (subtask.status == 'done') {
        subtasksCompleted += 1
      }
    }
    return subtasksCompleted
  }
  return (
    <div className={`task task_${theme}`}>
      <div className="task__head">
        <p className="title head_level-3">{task.title}</p>
      </div>
      <div className="task__sub">
        <p className="body body_level-2">
          subtasks {getSubtasksCompleted()} of {task.subtasks.length}
        </p>
      </div>
    </div>
  )
}
