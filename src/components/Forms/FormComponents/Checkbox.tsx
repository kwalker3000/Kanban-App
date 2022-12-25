import React, { useState, useEffect } from 'react'

//Components
import { IconCheck } from '../../elements/svg/iconCheck'

type CheckboxProps = {
  isMarked: boolean
  index: number
  handleClick: (index: number) => void
}

export const Checkbox = ({ isMarked, handleClick, index }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(isMarked)

  let handleChange = (index: number) => {
    handleClick(index)
    setIsChecked(!isChecked)
  }

  return (
    <>
      <input type="checkbox" onChange={() => handleChange(index)} />
      <span className={`checkbox ${isChecked && 'checkbox_active'}`}>
        <IconCheck />
      </span>
    </>
  )
}
