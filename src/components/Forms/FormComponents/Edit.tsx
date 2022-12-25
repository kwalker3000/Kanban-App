import React from 'react'

//Components
import { IconVerticalEllipsis } from '../../elements/svg/iconVerticalEllipsis'

export const Edit = () => {
  return (
    <button
      aria-label="edit board"
      className="vertical-elips__btn"
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
    >
      <span>
        <IconVerticalEllipsis />
      </span>
    </button>
  )
}
