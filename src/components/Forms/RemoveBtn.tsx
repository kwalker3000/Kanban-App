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
  return (
    <button
      type="button"
      aria-label={`${btnText} subtask`}
      className={`btn btn_${theme} btn_${btnText}--${theme} btn_active--${btnText}_${theme} btn_${btnText}`}
      onClick={() => handleClick(action)}
    >
      <span className={`btn-text btn-text_${theme} btn-text_${btnText}`}>
        {btnText}
      </span>
    </button>
  )
}
