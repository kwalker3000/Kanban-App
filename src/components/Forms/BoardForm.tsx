import React, { useState } from 'react'
import { Theme, InputEvent, FormEvent } from '../../@types/app'

//Components
import { BoardBtn } from './BoardBtn'

// Initial State Values
import { initErrorStatesBoard } from '../../../lib/initialStates'

type BoardFormProps = {
  theme: Theme
  actionKanban: (type: string, key: string, value: string) => void
  closePopup: () => void
  boardList: string[]
  boardName?: string | false
}

export const BoardForm = ({
  theme,
  actionKanban,
  closePopup,
  boardList,
  boardName,
}: BoardFormProps) => {
  let [newBoardName, setNewBoardName] = useState(boardName || '')
  let [errorStates, setErrorStates] = useState(initErrorStatesBoard)

  let { isEmptyError, isDuplicateError } = errorStates
  let checkIsValid = (boardName: string) => {
    let isDuplicate = boardList.some((board) => board == boardName)
    let isInvalid = [boardName.length == 0, isDuplicate]

    setErrorStates((prevState) => {
      return {
        ...prevState,
        isEmptyError: isInvalid[0],
        isDuplicateError: isInvalid[1],
      }
    })
    return !isInvalid[0] && !isInvalid[1]
  }

  let handleChange = (e: InputEvent): void => {
    let { value } = e.target
    setNewBoardName(() => value)
    setErrorStates(initErrorStatesBoard)
  }

  let handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (checkIsValid(newBoardName)) {
      actionKanban('CREATE NEW BOARD', 'name', newBoardName)
      closePopup()
    }
  }

  return (
    <div id="board-form">
      <div className={`board-form board-form_${theme}`}>
        <div className="board-form__head">
          <h2 className={`head_level-2 header_${theme}`}>
            {!boardName ? 'Add New Board' : 'Edit Board'}
          </h2>
        </div>
        <div className="board-form__form">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label className={`form__label label form__label_${theme}`}>
              Board Name
              <input
                type="text"
                name="name"
                className={`input input_${theme} ${
                  (isEmptyError || isDuplicateError) && 'input_board--error'
                }`}
                placeholder="e.g. 3D Graphics"
                onChange={(e) => handleChange(e)}
                value={newBoardName}
              />
              {isEmptyError && <p className="msg_error">Can&apos;t be empty</p>}
              {!isEmptyError && isDuplicateError && (
                <p className="msg_error">Already exists</p>
              )}
            </label>
            <BoardBtn
              theme={theme}
              btnText={boardName ? 'save changes' : 'create new board'}
              action="create board"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
