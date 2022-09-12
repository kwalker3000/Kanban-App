import React, { useState } from 'react'
import { Theme } from '../../@types/app'
import { Subtask, Task } from '../../@types/board'

import { IconCross } from '../elements/svg/iconCross'
import { Btn } from '../Btn'

type FormProps = {
  theme: Theme
}

// interface Subtask = {
//   description
// }

// [
//   {
//     description: 'e.g. Make Coffee',
//     status: 'todo'
//   },
//   {
//     description: 'e.g. Drink coffee & smile',
//     status: 'todo'
//   }
// ]

let initialState: Task = {
  title: 'e.g. Take coffee break',
  description:
    'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
  status: 'todo',
  subtasks: [
    {
      description: 'e.g. Make Coffee',
      status: 'todo',
    },
    {
      description: 'e.g. Drink coffee & smile',
      status: 'todo',
    },
  ],
}

interface TaskType {
  task: Task
  setTask: (task: Task) => void
}

export const TaskForm = ({ theme }: FormProps) => {
  const [task, setTask] = useState<Task>(initialState)

  let removeSubtask = (id: number): void => {
    //e.preventDefault()
    setTask((prevTask) => ({
      ...prevTask,
      subtasks: prevTask.subtasks.filter((subtask, index) => index !== id),
    }))
  }

  let addSubtask = () => {
    let newSubtask: Subtask = {
      description: '',
      status: 'todo',
    }
    setTask((prevTask) => ({
      ...prevTask,
      subtasks: [...prevTask.subtasks, newSubtask],
    }))
  }

  let status = ['todo', 'doing', 'done'].map((stat, i) => (
    <option
      key={i}
      className={`input input_${theme} option`}
      value={task.status}
    >
      {stat}
    </option>
  ))

  let subtasks = task.subtasks.map((subtask, index) => {
    return (
      <div
        className="subtask-wrapper"
        key={index}
        data-testid={`subtask-${index}`}
      >
        <input
          aria-label="subtask"
          type="text"
          name="subtask"
          className={`input input_${theme} input_subtask`}
          placeholder={task.subtasks[index].description}
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
          <h2 className={`head_level-2 header_${theme}`}>Add New Task</h2>
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
            <fieldset className="form__fieldset fieldset">
              <legend className={`form__label label form__label_${theme}`}>
                {task.subtasks.length > 0 && 'Subtasks'}
              </legend>
              {subtasks}
            </fieldset>
            <div className="btn-wrapper">
              <Btn
                action="add subtask"
                btnText="add new subtask"
                theme={theme}
                addSubtask={addSubtask}
              />
            </div>

            <label className={`form__label label form__label_${theme}`}>
              Status
              <select
                type="text"
                name="status"
                className={`input input_${theme}`}
                style={{ paddingTop: '0.7rem', paddingBottom: '0.7rem' }}
              >
                {status}
              </select>
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

// type Status = 'todo' | 'doing' | 'done'
// type Subtas = {
//   description: string
//   status: Status
// }

// type Task = {
//   title: string
//   description: string
//   status: Status
//   subtasks: Subtas[]
// }

// type Column = {
//   title: Status
//   tasks: Task[]
// }

// type Board = {
//   name: string
//   todo: Column
//   doing?: Column
//   done?: Column
// }

// type Kanban = Board[]

// let subtasks1 = task.subtasks.map((subtask, index) => {
//   return (
//     <div
//       className="subtask-wrapper"
//       key={index}
//       data-testid={`subtask-${index}`}
//     >
//       <input
//         title="orange"
//         type="text"
//         name="subtask"
//         className={`input input_${theme} input_subtask`}
//         placeholder={task.subtasks[index].description}
//       />
//       <IconCross
//         action={`remove subtask-${index}`}
//         id={index}
//         removeSubtask={removeSubtask}
//       />
//     </div>
//   )
// })
