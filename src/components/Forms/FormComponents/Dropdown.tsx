import React from 'react'
import { Theme, InputEvent } from '../../../@types/app'

type DropdownProps = {
  theme: Theme
  label: string
  taskStatus: string
  updateTask: (type: string, key: string, value: InputEvent) => void
}

export const Dropdown = ({
  theme,
  label,
  taskStatus,
  updateTask,
}: DropdownProps) => {
  //Todo i could pass dynamic list from useContext
  let status = ['todo', 'doing', 'done'].map((stat, i) => (
    <option key={i} className={`input input_${theme} option`} value={stat}>
      {stat[0].toUpperCase() + stat.slice(1)}
    </option>
  ))

  return (
    <label className={`form__label label form__label_${theme}`}>
      {label}
      <select
        name="status"
        className={`input input_${theme}`}
        style={{
          paddingTop: '0.7rem',
          paddingBottom: '0.7rem',
          cursor: 'pointer',
        }}
        value={taskStatus}
        onChange={(e) => updateTask('UPDATE STATUS', 'status', e)}
      >
        {status}
      </select>
    </label>
  )
}
