import React, { useState } from 'react'
import { Theme } from '../../@types/app'
import { useAppContext } from '../../context/useAppContext'

// Components
import { IconBoard } from '../elements/svg/iconBoard'
import { IconAdd } from '../elements/svg/iconAdd'
import { IconHideSidebar } from '../elements/svg/iconHideSidebar'
import { IconShowSidebar } from '../elements/svg/iconShowSidebar'
import { Slider } from './Slider'

type SidebarProps = {
  theme: Theme
  isMobile: boolean | undefined
  toggleTheme: () => void
}

// TODO pass theme
export const Sidebar = ({ theme, isMobile, toggleTheme }: SidebarProps) => {
  // TODO probably better to pass from index.tsx
  let { kanban } = useAppContext()
  const [activeBoard, setActiveBoard] = useState(kanban[0].name)
  const [isHidden, setIsHidden] = useState(false)

  // TODO
  // loop kanban boards and make list
  let boards = kanban.map((board, index) => {
    return (
      <button
        key={index}
        className={`sidebar__list-item--btn ${
          board.name == activeBoard && '_selected'
        }`}
      >
        <IconBoard />
        <h3 className="head_level-3">{board.name}</h3>
      </button>
    )
  })

  console.log(typeof theme)
  return (
    <div id="sidebar">
      <div
        className={`sidebar sidebar_${theme} ${
          isHidden ? 'is-hidden' : 'is-not-hidden-side'
        }`}
      >
        <div className="sidebar__list">
          <h2 className="sidebar__list-title">all boards ({kanban.length})</h2>
          {boards}

          <button className={`sidebar__list-item--btn add`}>
            <IconBoard />

            <span className="operator head_level-3">+</span>
            <h3 className="head_level-3">Create New Board</h3>
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
