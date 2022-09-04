import React from 'react'

export const IconChevron = () => {
  return (
    <button aria-label="open kanban navigation" className="chevron__btn">
      {true ? (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
      ) : (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="M9 6 5 2 1 6" />
        </svg>
      )}
    </button>
  )
}
