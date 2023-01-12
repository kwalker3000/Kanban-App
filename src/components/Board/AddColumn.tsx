import React from 'react'
import { Theme } from '../../@types/app'

type BoardProps = {
  theme: Theme
  isNewBoard: boolean
  openPopup: (key: string) => void
  isMobile: boolean
}

export const AddColumn = ({
  theme,
  isNewBoard,
  openPopup,
  isMobile,
}: BoardProps) => {
  return (
    <div
      className={`add-column add-column_${theme} ${!isNewBoard && 'bg-color'}`}
    >
      <div className={`add-column__head ${!isMobile && '_pad'}`}>
        {isNewBoard && (
          <p className="add-column__head-text head_level-2">
            This board is empty. Create a new task to get started.
          </p>
        )}
      </div>
      <div className="add-column__body">
        <button
          onClick={() => openPopup('taskPopup')}
          className={`add-column__btn ${!isNewBoard && 'btn_theme'} btn_active`}
        >
          {isNewBoard ? (
            <>
              <span className="operator head_level-3">+</span>
              {/*<span className="btn-text head_level-3">Add New Column</span>*/}
              <span className="btn-text head_level-3">Add New Task</span>
            </>
          ) : (
            <>
              <span className="operator_column head_level-1">+</span>
              <span className="btn-text_column head_level-1">New Column</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
