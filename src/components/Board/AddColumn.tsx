import React from 'react'
import { Theme } from '../../@types/app'

type BoardProps = {
  theme: Theme
  isNewBoard: boolean
}

export const AddColumn = ({ theme, isNewBoard }: BoardProps) => {
  return (
    <div
      className={`add-column add-column_${theme} ${!isNewBoard && 'bg-color'}`}
    >
      <div className="add-column__head">
        {isNewBoard && (
          <p className="add-column__head-text head_level-2">
            This board is empty. Create a new column to get started.
          </p>
        )}
      </div>
      <div className="add-column__body">
        <button className={`add-column__btn ${!isNewBoard && 'btn_theme'}`}>
          {isNewBoard ? (
            <>
              <span className="operator head_level-3">+</span>
              <span className="btn-text head_level-3">Add New Column</span>
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
