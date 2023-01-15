import React from 'react'

// Components
import { IconCross } from '../../elements/svg/iconCross'

type Props = {
  action: string
  id: number
  actionTask: (type: string, key: string, value: number) => void
}

export const Cross = ({ action, id, actionTask }: Props) => {
  return (
    <button
      type="button"
      aria-label={`${action}`}
      className="cross-btn"
      onClick={() => actionTask('REMOVE SUBTASK', '', id)}
    >
      <IconCross />
    </button>
  )
}
