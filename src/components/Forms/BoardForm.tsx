import React, { useState } from 'react'
import { Theme, InputEvent, FormEvent } from '../../@types/app'
import { Board } from '../../@types/board'

//Components
import { BoardBtn } from './BoardBtn'

type BoardFormProps = {
  theme: Theme
  actionKanban: (type: string, key: string, value: string) => void
  closePopup: () => void
}

// let initialState: Board = {
//   name: '',
//   todoCol: {
//     status: 'todo',
//     tasks: [],
//   },
//   doingCol: {
//     status: 'doing',
//     tasks: [],
//   },
//   doneCol: {
//     status: 'done',
//     tasks: [],
//   },
// }

export const BoardForm = ({
  theme,
  actionKanban,
  closePopup,
}: BoardFormProps) => {
  let [newBoardName, setNewBoardName] = useState('')

  let handleChange = (key: string, e: InputEvent): void => {
    let { value } = e.target
    setNewBoardName(() => value)
  }

  let handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    actionKanban('CREATE NEW BOARD', 'name', newBoardName)
    closePopup()
  }

  return (
    <div id="board-form">
      <div className={`board-form board-form_${theme}`}>
        <div className="board-form__head">
          <h2 className={`head_level-2 header_${theme}`}>Add New Board</h2>
        </div>
        <div className="board-form__form">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label className={`form__label label form__label_${theme}`}>
              Board Name
              <input
                type="text"
                name="name"
                className={`input input_${theme}`}
                placeholder="e.g. 3D Graphics"
                onChange={(e) => handleChange('name', e)}
                value={newBoardName}
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
