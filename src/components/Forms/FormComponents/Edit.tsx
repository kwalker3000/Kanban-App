import React from 'react'

//Components
import { IconVerticalEllipsis } from '../../elements/svg/iconVerticalEllipsis'

type EditProps = {
  // openPopup: (key: string) => void
  // closePopup: (exception?: boolean) => void
  toggleSubmenu: () => void
}

export const Edit = ({ toggleSubmenu }: EditProps) => {
  let handleClick = () => {
    // closePopup(true) // w/o exception erases prop needed for editing task
    // openPopup('taskPopup')
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
