import React, { useState, useEffect } from 'react'
import { Theme, InputEvent } from '../../@types/app'
import { Status, Task } from '../../@types/board'

// Components
import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'
import { Edit } from './FormComponents/Edit'
import { Dropdown } from './FormComponents/Dropdown'
import { Checkbox } from './FormComponents/Checkbox'

type FormProps = {
  theme: Theme
  taskObj: Task //TODO removed previous '?'
  actionBoard: (type: string, key: string, value: Task) => void
  openPopup: (key: string, isNewBoard: boolean, objToDelete?: string) => void
  closePopup: (exception?: boolean) => void
}
let initialState: Task = {
  title: 'Get some coffee from the coffee shop.',
  id: 1,
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
//TODO i am checking status count 2x here and once in Task component
// can i consolidate??
export const SubtaskForm = ({
  theme,
  taskObj,
  actionBoard,
  openPopup,
  closePopup,
}: FormProps) => {
  const [task, setTask] = useState(taskObj || initialState)
  const [isSubmenu, setIsSubmenu] = useState(false)
  const [subtasksCompleted, setSubtasksCompleted] = useState(0)

  let toggleSubmenu = () => {
    setIsSubmenu((prev) => !prev)
  }
  let handleSubmenu = (action: string) => {
    if (action == 'EDIT') {
      closePopup(true)
      openPopup('taskPopup', false)
    } else {
      closePopup(true)
      openPopup('removePopup', false, 'task')
      // closePopup()
      // actionBoard('DELETE TASK', 'tasks', task)
    }
  }
  // updates the status of the subtasks and tasks
  let handleClick = (index: number) => {
    let status: keyof typeof task
    status = 'status'

    setTask((prevState) => {
      let subtasksCopy = [...prevState.subtasks]
      let status1 = subtasksCopy[index].status === 'todo' ? 'done' : 'todo'
      subtasksCopy[index] = { ...subtasksCopy[index], [status]: status1 }

      let score = 0
      subtasksCopy.forEach((subtask) => {
        if (subtask.status == 'done') {
          score += 1
        }
      })
      let taskStatus: Status =
        score == 0 ? 'todo' : score == subtasksCopy.length ? 'done' : 'doing'

      return {
        ...prevState,
        status: taskStatus,
        subtasks: subtasksCopy,
      }
    })
  }
  let updateTask = (type: string = '', key: string, value: InputEvent) => {
    let val = value.target.value.toLowerCase()
    if (val)
      setTask((preState) => {
        let updatedSubtasks = [...preState.subtasks]
        for (let i = 0; i < subtasks.length; i++) {
          if (val == 'done') {
            updatedSubtasks[i].status = 'done'
          } else if (val == 'todo') {
            console.log('inside todo')
            updatedSubtasks[i].status = 'todo'
          }
        }

        return {
          ...preState,
          [key]: val,
          subtasks: updatedSubtasks,
        }
      })
  }

  let updateSubtasksCompleted = () => {
    let score = 0
    task.subtasks.forEach((subtask) => {
      if (subtask.status == 'done') {
        score += 1
      }
    })
    setSubtasksCompleted(score)
    return score
  }
  useEffect(() => {
    actionBoard('UPDATE TASK', 'tasks', task)
    updateSubtasksCompleted()
  }, [task])

  let subtasks = task.subtasks.map((subtask, index) => {
    return (
      <div
        key={index}
        onClick={() => handleClick(index)}
        className={`subtask-wrapper wrapper_${theme}`}
        tabIndex={0}
      >
        <label className={`subtask__label form__label_${theme} `}>
          <Checkbox
            isMarked={subtask.status === 'done'}
            handleClick={handleClick}
            index={index}
            theme={theme}
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
          <h2 className={`head_level-2 header_${theme}`}>{task.title}</h2>
          <Edit toggleSubmenu={toggleSubmenu} />
          {isSubmenu && (
            <div className={`subtask-form__submenu-wrapper submenu_${theme}`}>
              <div>
                <button
                  onClick={() => handleSubmenu('EDIT')}
                  className="submenu__btn"
                >
                  <span className="submenu__btn-txt body_level-1">
                    Edit Task
                  </span>
                </button>
                <button
                  onClick={() => handleSubmenu('DELETE')}
                  className="submenu__btn"
                >
                  <span className="submenu__btn-txt body_level-1 _delete">
                    Delete Task
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="subtask-form__body">
          <p className="body_level-1">{task.description}</p>
        </div>
        <div className="subtask-form__form"></div>
        <form className="form">
          <fieldset className="form__fieldset fieldset">
            <legend className={`form__label label form__label_${theme}`}>
              Subtasks {subtasksCompleted} of {task.subtasks.length}
            </legend>
            {subtasks}
          </fieldset>
          <Dropdown
            theme={theme}
            label="Current Status"
            taskStatus={task.status}
            updateTask={updateTask}
          />
        </form>
      </div>
    </div>
  )
}
