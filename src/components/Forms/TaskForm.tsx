import React, { useState } from 'react'
import { Theme } from '../../@types/app'

import { IconCross } from '../elements/svg/iconCross'
import { Btn } from '../Btn'
type Subtask = string[]
type FormProps = {
  theme: Theme
}

export const TaskForm = ({ theme }: FormProps) => {
  const [subtask, setSubtask] = useState<Subtask>(
    true && ['e.g. Make Coffee', 'e.g. Drink coffee & smile']
  )

  let removeSubtask = (id: number): void => {
    //e.preventDefault()
    setSubtask((prevSubtask) =>
      prevSubtask.filter((subtask, index) => index !== id)
    )
  }

  let subtasks = subtask.map((task, index) => {
    return (
      <div
        className="subtask-wrapper"
        key={index}
        data-testid={`subtask-${index}`}
      >
        <input
          title="orange"
          type="text"
          name="subtask"
          className={`input input_${theme} input_subtask`}
          placeholder={task}
        />
        <IconCross
          action={`remove subtask-${index}`}
          id={index}
          removeSubtask={removeSubtask}
        />
      </div>
    )
  })

  return (
    <div id="task-form">
      <div className={`task-form task-form_${theme}`}>
        <div className="task-form__head">
          <h2 className={`head_level-2 header_${theme}`}>Task Form</h2>
        </div>
        <div className="task-form__form">
          <form className="form">
            <label className={`form__label label form__label_${theme}`}>
              Title
              <input
                type="text"
                name="title"
                className={`input input_${theme}`}
                placeholder="e.g. Take Coffee Break"
              />
            </label>
            <label className={`form__label label form__label_${theme}`}>
              Description
              <textarea
                className={`input input_${theme}`}
                name="description"
                placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
              />
            </label>
            <label
              className={`form__label label form__label_${theme}`}
              data-testid="subtask-array-length"
            >
              {subtask.length > 0 && 'Subtasks'}
              {subtasks}
              <div>
                <Btn
                  action="add subtask"
                  btnText="add new subtask"
                  theme={theme}
                />
              </div>
            </label>
            <label className={`form__label label form__label_${theme}`}>
              Status
              <input
                type="text"
                name="status"
                className={`input input_${theme}`}
              />
            </label>
            <div>
              <Btn action="create task" btnText="create task" theme={theme} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

type Status = 'todo' | 'doing' | 'done'
type Subtas = {
  description: string
  status: Status
}

type Task = {
  title: string
  description: string
  status: Status
  subtasks: Subtas[]
}

type Column = {
  title: Status
  tasks: Task[]
}

type Board = {
  name: string
  todo: Column
  doing?: Column
  done?: Column
}

type Kanban = Board[]
