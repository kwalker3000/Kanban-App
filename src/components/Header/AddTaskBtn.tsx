import React from 'react'

type Props = {
  isMobile: boolean | undefined
  openPopup: (key: string) => void
  isSidebarOpen: boolean
  closePopup: () => void
}

export const AddTaskBtn = ({
  isMobile,
  openPopup,
  closePopup,
  isSidebarOpen,
}: Props) => {
  let handlePopup = () => {
    closePopup()
    openPopup('taskPopup')
  }
  return (
    <button
      id="add-task__btn"
      className="add-task__btn"
      aria-label="add task"
      onClick={() => handlePopup()}
    >
      <span>
        <svg
          aria-hidden={true}
          role="img"
          aria-labelledby="" //TODO
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFF"
            d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
          />
        </svg>
      </span>
      {!isMobile && <span className="add-task__btn-text">add new task</span>}
    </button>
  )
}
