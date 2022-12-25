import React from 'react'
import { Theme } from '../../../@types/app'
import { Status } from '../../../@types/board'

type DropdownProps = {
  theme: Theme
  label: string
  action: 'UPDATE SUBTASK STATUS' | 'UPDATE TASK STATUS'
  taskStatus: string
}

export const Dropdown = ({
  theme,
  label,
  action,
  taskStatus,
}: DropdownProps) => {
  let status = ['Todo', 'Doing', 'Done'].map((stat, i) => (
    <option key={i} className={`input input_${theme} option`} value={stat}>
      {stat}
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
        // value={taskStatus}
        // onChange={(e) => setAction('UPDATE STATUS', 'status', e)}
      >
        {status}
      </select>
    </label>
  )
}
