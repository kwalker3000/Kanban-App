import React, { useState, useEffect } from 'react'
import { Theme } from '../../@types/app'
import { Status } from '../../@types/board'

// Components
import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'
import { Edit } from './FormComponents/Edit'
import { Dropdown } from './FormComponents/Dropdown'
import { Checkbox } from './FormComponents/Checkbox'

type FormProps = {
  theme: Theme
}
let initialState = {
  title: 'Get some coffee from the coffee shop.',
  description:
    "Need coffee for christmas party tomorrow. It would be best to get it from Moe's.",
  status: 'todo',
  subtasks: [
    {
      description: 'Research types of coffee everyone likes',
      status: 'todo',
    },
    {
      description: 'Outline nearby shops and get hours',
      status: 'todo',
    },
    {
      description: 'Make pros and cons of each coffee bean type',
      status: 'todo',
    },
  ],
}

export const SubtaskForm = ({ theme }: FormProps) => {
  const [task, setTask] = useState(initialState)

  let handleClick = (index: number) => {
    setTask((prevState) => {
      let subtasksCopy = [...prevState.subtasks]
      let status1 = subtasksCopy[index].status === 'todo' ? 'done' : 'todo'
      subtasksCopy[index] = { ...subtasksCopy[index], ['status']: status1 }
      let score = 0
      subtasksCopy.forEach((subtask) => {
        if (subtask.status == 'done') {
          score += 1
        }
      })
      let taskStatus =
        score == 0 ? 'todo' : score == subtasksCopy.length ? 'done' : 'doing'
      return {
        ...prevState,
        status: taskStatus,
        subtasks: subtasksCopy,
      }
    })
  }
  useEffect(() => {}, [])

  let subtasks = task.subtasks.map((subtask, index) => {
    return (
      <div key={index} className="subtask-wrapper wrapper_dark">
        <label className={`subtask__label form__label_${theme} `}>
          <Checkbox
            isMarked={subtask.status === 'done'}
            handleClick={handleClick}
            index={index}
          />
          <span
            className={`subtask__description ${
              subtask.status == 'done' && 'description_active'
            }`}
          >
            {subtask.description}
          </span>
        </label>
        <div></div>
      </div>
    )
  })

  return (
    <div id="subtask-form">
      <div className={`subtask-form subtask-form_${theme}`}>
        <div className="subtask-form__head">
          <h2 className={`head_level-2 header_${theme}`}>
            Research pricing points of various competitors and trial different
            business models
          </h2>
          <Edit /> {/* wrapped in button */}
        </div>
        <div className="subtask-form__body">
          <p className="body_level-1">
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>
        </div>
        <div className="subtask-form__form"></div>
        <form className="form">
          <fieldset className="form__fieldset fieldset">
            <legend className={`form__label label form__label_${theme}`}>
              Subtasks x of y
            </legend>
            {subtasks}
          </fieldset>
          <Dropdown
            theme={theme}
            label="Current Status"
            action="UPDATE SUBTASK STATUS"
            taskStatus={task.status}
          />
        </form>
      </div>
    </div>
  )
}
