import React from 'react'
import { Theme } from '../../@types/app'

//Components
import { RemoveBtn } from './RemoveBtn'

type RemoveProps = {
  theme: Theme
}

export const Remove = ({ theme }: RemoveProps) => {
  return (
    <div id="remove">
      <div className={`remove remove_${theme}`}>
        <div className="remove__head">
          <h2 className={`head_level-2 header_${theme}`}>Delete this ...</h2>
        </div>
        <div className="remove__body">
          <p className="body_level-1">
            Are you sure you want to delete the ‘Platform Launch’ board? This
            action will remove all columns and tasks and cannot be reversed.
          </p>
        </div>
        <div className="remove__btn-wrapper">
          <RemoveBtn theme={theme} btnText="delete" action="delete" />
          <RemoveBtn theme={theme} btnText="cancel" action="cancel" />
        </div>
      </div>
    </div>
  )
}
