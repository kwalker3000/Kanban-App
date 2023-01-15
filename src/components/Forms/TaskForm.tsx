import React, { useState, useEffect, useReducer } from 'react'
import { Theme, InputEvent, FormEvent } from '../../@types/app'
import { Task, Board } from '../../@types/board'

import { useTask } from '../../hooks/useTask'

//Components
import { Cross } from './FormComponents/Cross'
import { Dropdown } from './FormComponents/Dropdown'
import { SubTaskBtn } from './SubTaskBtn'
import { TaskBtn } from './TaskBtn'

// Initial State Values
import { initErrorStatesTask, initTaskState } from '../../../lib/initialStates'

type FormProps = {
  theme: Theme
  taskObj: Task
  nextTaskId: number
  actionBoard: (type: string, key: string, value: Task) => void
  actionKanban: (type: string, key: string, value: Board) => void
  closePopup: () => void
  board: Board
}

export const TaskForm = ({
  theme,
  taskObj,
  nextTaskId,
  actionBoard,
  closePopup,
  actionKanban,
  board,
}: FormProps) => {
  initTaskState.id = nextTaskId
  const [task, setTask] = useReducer(useTask, taskObj || initTaskState)
  const [errorStates, setErrorStates] = useState(initErrorStatesTask)

  let { isTitleError, isDescriptionError, isSubtaskError } = errorStates
  const actionTask = (
    type: string,
    key: string,
    value: string | number | InputEvent,
    index = 0
  ) => {
    setTask({
      type: type,
      payload: { key, value, index },
    })
    setErrorStates(initErrorStatesTask)
  }

  let checkValidForm = (form: Task) => {
    let isInvalid = [
      form.title.length == 0,
      // form.description.length == 0,
      form.subtasks.length > 0 && form.subtasks[0].description.length == 0,
    ]
    setErrorStates((prevState) => {
      return {
        ...prevState,
        isTitleError: isInvalid[0],
        isDescriptionError: false, // currently allowing empty field
        isSubtaskError: isInvalid[2],
      }
    })

    return isInvalid.every((error) => error == false)
  }

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
          className={`input input_${theme} input_subtask ${
            isSubtaskError && 'input_subtask--error'
          }`}
          placeholder="e.g. Make Coffee"
          value={subtask.description}
          onChange={(e) => actionTask('EDIT SUBTASK', 'description', e, index)}
        />
        {isSubtaskError && index == 0 && (
          <p className="msg_error msg_error--subtask">Can&apos;t be empty</p>
        )}
        <Cross
          action={`remove subtask-${index}`}
          id={index}
          actionTask={actionTask}
        />
      </div>
    )
  })
  let updateTask = (type: string, key: string, value: InputEvent) => {
    actionTask(type, key, value)
  }

  let handleSubmit = (e: FormEvent, form: Task) => {
    e.preventDefault()
    if (checkValidForm(form)) {
      closePopup()
      actionBoard('CREATE NEW TASK', 'tasks', form)
    }
  }
  // useEffect(() => {
  //   console.log('update...')
  //   actionKanban('UPDATE BOARD', '', board)
  // }, [board.tasks.length])

  return (
    <div id="task-form">
      <div className={`task-form task-form_${theme}`}>
        <div className="task-form__head">
          <h2 className={`head_level-2 header_${theme}`}>
            {taskObj ? 'Edit Task' : 'Add New Task'}
          </h2>
        </div>
        <div className="task-form__form">
          <form className="form" onSubmit={(e) => handleSubmit(e, task)}>
            <label className={`form__label label form__label_${theme}`}>
              Title
              <input
                type="text"
                name="title"
                className={`input input_${theme} ${
                  isTitleError && 'input_title--error'
                }`}
                placeholder="e.g. Take Coffee Break"
                onChange={(e) => actionTask('EDIT TASK', 'title', e)}
                value={task.title}
              />
              {isTitleError && <p className="msg_error">Can&apos;t be empty</p>}
            </label>
            <label className={`form__label label form__label_${theme}`}>
              Description
              <textarea
                className={`input input_${theme} ${
                  isDescriptionError && 'input_description--error'
                }`}
                name="description"
                placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
                onChange={(e) => actionTask('EDIT TASK', 'description', e)}
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
                actionTask={actionTask}
                subtaskCount={task.subtasks.length}
              />
            </div>

            <Dropdown
              theme={theme}
              label="Status"
              updateTask={updateTask}
              taskStatus={task.status}
            />
            <div>
              <TaskBtn
                action="create task"
                btnText="create task"
                theme={theme}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
