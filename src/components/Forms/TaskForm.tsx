import React, { useState, useEffect, useReducer } from 'react'
import { Theme, InputEvent } from '../../@types/app'
import { Subtask, Task } from '../../@types/board'

import { IconCross } from '../elements/svg/iconCross'
// import { Btn } from '../Btn'

import { useAppContext } from '../../context/useAppContext'
import { useTask } from '../../hooks/useTask'
// import { useSubtask } from '../../hooks/useSubTask'
import { SubTaskBtn } from './SubTaskBtn'
import { TaskBtn } from './TaskBtn'

type FormProps = {
  theme: Theme
}

let initialTaskState: Task = {
  title: '',
  description: '',
  status: 'todo',
  subtasks: [],
}

export const TaskForm = ({ theme }: FormProps) => {
  let { kanban, setKanban } = useAppContext()
  const [task, setTask] = useReducer(useTask, initialTaskState)

  const setAction = (
    type: string,
    key: string,
    value: string | number | InputEvent,
    index = 0
  ) => {
    setTask({
      type: type,
      payload: { key, value, index },
    })
  }

  let removeSubtask = (id: number): void => {
    setAction('REMOVE SUBTASK', '', id)
  }

  let addSubtask = () => {
    // create empty field
    setAction('ADD SUBTASK', '', '')
  }

  let status = ['todo', 'doing', 'done'].map((stat, i) => (
    <option key={i} className={`input input_${theme} option`} value={stat}>
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
          placeholder="e.g. Make Coffee"
          value={subtask.description}
          onChange={(e) => setAction('EDIT SUBTASK', 'description', e, index)}
        />
        {/*TODO move out of svg folder because has functionality */}
        <IconCross
          action={`remove subtask-${index}`}
          id={index}
          removeSubtask={removeSubtask}
        />
      </div>
    )
  })

  //TODO handle adding Tasks
  // treat new task and edit task same?
  let addTask = (newTask: Task) => {
    // let key = 'New Project'['todoCol']
    setKanban('CREATE NEW TASK', 'todoCol', newTask)
    console.log('adding task...')
  }
  useEffect(() => {
    // console.log(kanban)
  }, [])

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
                onChange={(e) => setAction('EDIT TASK', 'title', e)}
                value={task.title}
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
                onChange={(e) => setAction('EDIT TASK', 'description', e)}
                value={task.description}
              />
            </label>
            <fieldset className="form__fieldset fieldset">
              <legend className={`form__label label form__label_${theme}`}>
                {task.subtasks.length > 0 && 'Subtasks'}
              </legend>
              {subtasks}
            </fieldset>
            <div className="btn-wrapper">
              <SubTaskBtn
                action="add subtask"
                btnText="add new subtask"
                theme={theme}
                addSubtask={addSubtask}
              />
            </div>

            <label className={`form__label label form__label_${theme}`}>
              Status
              <select
                name="status"
                className={`input input_${theme}`}
                style={{ paddingTop: '0.7rem', paddingBottom: '0.7rem' }}
                value={task.status}
                onChange={(e) => setAction('UPDATE STATUS', 'status', e)}
              >
                {status}
              </select>
            </label>
            <div>
              <TaskBtn
                action="create task"
                btnText="create task"
                theme={theme}
                addTask={addTask}
                task={task}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
