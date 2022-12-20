import React, { useState, useEffect } from 'react'
import { Theme } from '../../@types/app'
import { Board as BoardType } from '../../@types/board'

// Components
import { AddColumn } from './AddColumn'
import { Column } from './Column'
// import { Task } from './Task'

type BoardProps = {
  theme: Theme
  currentBoard: BoardType
}

export const Board = ({ theme, currentBoard }: BoardProps) => {
  const [isNewBoard, setIsNewBoard] = useState(false)

  //todo
  //doing
  //done

  return (
    <div id="board">
      <div className={`board board_${theme}`}>
        {/*<div>todo</div>
        <div>doing</div>
        <div>done</div>*/}
        <div className="board__column-wrapper">
          <Column currentBoard={currentBoard} theme={theme} />
        </div>
        <div className="board__add-column-wrapper">
          {isNewBoard ? (
            <AddColumn theme={theme} isNewBoard={isNewBoard} />
          ) : (
            <AddColumn theme={theme} isNewBoard={isNewBoard} />
          )}
        </div>
      </div>
    </div>
  )
}
