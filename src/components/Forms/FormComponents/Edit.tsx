import React from 'react'

// Components
import { IconVerticalEllipsis } from '../../elements/svg/iconVerticalEllipsis'

type EditProps = {
  toggleSubmenu: () => void
}

export const Edit = ({ toggleSubmenu }: EditProps) => {
  let handleClick = () => {
    toggleSubmenu()
  }
  return (
    <button
      onClick={() => handleClick()}
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
