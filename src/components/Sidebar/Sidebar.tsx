import React, { useState } from 'react'
import { Theme } from '../../@types/app'
import { Board } from '../../@types/board'

// Components
import { IconBoard } from '../elements/svg/iconBoard'
import { IconHideSidebar } from '../elements/svg/iconHideSidebar'
import { IconShowSidebar } from '../elements/svg/iconShowSidebar'
import { Slider } from './Slider'

type SidebarProps = {
  theme: Theme
  isMobile: boolean | undefined
  toggleTheme: () => void
  board: Board
  boardList: string[]
  handleActiveBoard: (index: number) => void
  openPopup: (key: string, isNewBoard: boolean) => void
  closePopup: () => void
}

export const Sidebar = ({
  theme,
  isMobile,
  toggleTheme,
  board,
  boardList,
  handleActiveBoard,
  openPopup,
  closePopup,
}: SidebarProps) => {
  // TODO probably better to pass from index.tsx
  const [isHidden, setIsHidden] = useState(false)

  let handlePopup = () => {
    closePopup()
    openPopup('boardPopup', true)
  }

  let boards = boardList.map((name, index) => {
    return (
      <button
        key={index}
        onClick={() => handleActiveBoard(index)}
        className={`sidebar__list-item--btn ${
          name == board.name ? '_selected' : 'btn_active--' + theme
        }`}
      >
        <IconBoard />
        <span className="head_level-3">{name}</span>
      </button>
    )
  })

  return (
    <div id="sidebar">
      <div
        className={`sidebar sidebar_${theme} ${
          isHidden ? 'is-hidden' : 'is-not-hidden-side'
        }`}
      >
        <div className="sidebar__list">
          <h3 className="sidebar__list-title">
            all boards ({boardList.length})
          </h3>
          {boards}

          <button
            className={`sidebar__list-item--btn add`}
            onClick={() => handlePopup()}
          >
            <IconBoard />

            <span className="operator head_level-3">+</span>
            <span className="head_level-3">Create New Board</span>
          </button>
        </div>

        <div className="sidebar-slider__wrapper">
          <Slider theme={theme} toggleTheme={toggleTheme} />

          {!isMobile && (
            <>
              <button
                onClick={() => setIsHidden((pre) => !pre)}
                className={`sidebar__toggle-btn`}
              >
                <IconHideSidebar />
                <span className="sidebar__toggle-text">hide sidebar</span>
              </button>

              <button
                onClick={() => setIsHidden((pre) => !pre)}
                className={`sidebar__toggle-btn ${
                  isHidden ? 'is-not-hidden' : 'underneath'
                }`}
              >
                <IconHideSidebar />
                <span className="sidebar__toggle-text">show sidebar</span>
                <IconShowSidebar />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
