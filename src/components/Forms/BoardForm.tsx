import React from 'react'
import { Theme } from '../../@types/app'

//Components
import { BoardBtn } from './BoardBtn'

type BoardFormProps = {
  theme: Theme
}

export const BoardForm = ({ theme }: BoardFormProps) => {
  return (
    <div id="board-form">
      <div className={`board-form board-form_${theme}`}>
        <div className="board-form__head">
          <h2 className={`head_level-2 header_${theme}`}>Add New Board</h2>
        </div>
        <div className="board-form__form">
          <form className="form">
            <label className={`form__label label form__label_${theme}`}>
              Board Name
              <input
                type="text"
                name="name"
                className={`input input_${theme}`}
                placeholder="e.g. 3D Graphics"
                // onChange={(e) => setAction('EDIT TASK', 'title', e)}
                // value={task.title}
              />
            </label>
            <BoardBtn
              theme={theme}
              btnText="create new board"
              action="create board"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
