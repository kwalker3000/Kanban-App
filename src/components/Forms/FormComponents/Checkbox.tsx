import React, { useState, useEffect } from 'react'
import { Theme } from '../../../@types/app'

//Components
import { IconCheck } from '../../elements/svg/iconCheck'

type CheckboxProps = {
  theme: Theme
  isMarked: boolean
  index: number
  handleClick: (index: number) => void
}

export const Checkbox = ({
  isMarked,
  handleClick,
  index,
  theme,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(isMarked)

  let handleChange = (index: number) => {
    handleClick(index)
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    setIsChecked(isMarked)
  }, [isMarked])
  return (
    <>
      <input type="checkbox" onChange={() => handleChange(index)} />
      <span
        className={`checkbox checkbox_${theme} ${
          isChecked && 'checkbox_active'
        }`}
      >
        <IconCheck isChecked={isChecked} />
      </span>
    </>
  )
}
