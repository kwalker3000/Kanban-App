import React from 'react'

type Props = {
  action: string
  id: number
  removeSubtask: (id: number) => void
  // onClick(e: React.MouseEvent<HTMLElement>):void
}

export const IconCross = ({ action, id, removeSubtask }: Props) => {
  return (
    <button
      type="button"
      aria-label={`${action}`}
      className="cross-btn"
      onClick={() => removeSubtask(id)}
    >
      <svg
        aria-hidden={true}
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fillRule="evenodd">
          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
        </g>
      </svg>
    </button>
  )
}
