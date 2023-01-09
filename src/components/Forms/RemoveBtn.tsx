import React from 'react'
import { Theme } from '../../@types/app'
import { Task } from '../../@types/board'

type BtnProp = {
  action: string
  btnText: string
  theme: Theme
  handleClick: (action: string) => void
}

export const RemoveBtn = ({
  action,
  btnText,
  theme,
  handleClick,
}: // task,
// addTask,
BtnProp): JSX.Element => {
  console.log(action)
  action = action.toLowerCase()
  return (
    <button
      type="button"
      aria-label={`${action} subtask`}
      className={`btn btn_${theme} btn_${action}--${theme} btn_active--${action}_${theme} btn_${action}`}
      onClick={() => handleClick(action)}
    >
      <span className={`btn-text btn-text_${theme} btn-text_${action}`}>
        {btnText}
      </span>
    </button>
  )
}
