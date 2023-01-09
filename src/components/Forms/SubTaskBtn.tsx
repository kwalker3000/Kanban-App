import React from 'react'
import { Theme } from '../../@types/app'
// import { Task } from '../../@types/board'

type BtnProp = {
  action: string
  btnText: string
  theme: Theme
  actionTask: (type: string, key: string, value: string) => void
  subtaskCount: number
}

export const SubTaskBtn = ({
  action,
  btnText,
  theme,
  actionTask,
  subtaskCount,
}: BtnProp): JSX.Element => {
  const [act, type] = action.split(' ')
  return (
    <button
      type="button"
      aria-label={`${act} subtask`}
      className={`btn btn_${theme}--minor btn_active--${
        theme == 'light' && type
      }`}
      onClick={() => actionTask('ADD SUBTASK', '', '')}
      disabled={subtaskCount == 4}
    >
      {act == 'add' && (
        <span>
          <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg">
            <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" />
          </svg>
        </span>
      )}
      <span className={`btn-text btn-text_${theme} btn-text_${action}`}>
        {btnText}
      </span>
    </button>
  )
}
