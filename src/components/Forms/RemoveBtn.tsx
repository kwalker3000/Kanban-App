import React from 'react'
import { Theme } from '../../@types/app'

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
}: BtnProp): JSX.Element => {
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
