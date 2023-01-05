import React, { useState } from 'react'
import { Title, Theme } from '../../@types/app'
import { Board } from '../../@types/board'

import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'
import { AddTaskBtn } from './AddTaskBtn'
import { LogoMobile } from '../elements/svg/logoMobile'
import { IconChevron } from './iconChevron'

type HeaderProps = {
  theme: Theme
  isMobile: boolean | undefined
  openPopup: (key: string) => void
  closePopup: () => void
  isSidebarOpen: boolean
  board: Board
}

export const Header = ({
  theme,
  isMobile,
  openPopup,
  closePopup,
  isSidebarOpen,
  board,
}: HeaderProps): JSX.Element => {
  return (
    <div id="header">
      <div
        className={`header header_${theme} ${isSidebarOpen && 'sidebar-state'}`}
      >
        <div className="head-wrapper">
          {isMobile && (
            <div className="header__logo logo-wrapper">
              <LogoMobile />
            </div>
          )}
          <div></div>
          <h2 className={`header__head head_${theme} head_level-2`}>
            {board.name || undefined}
          </h2>
          <div>
            <IconChevron openPopup={openPopup} isSidebarOpen={isSidebarOpen} />
          </div>
        </div>
        <div className="header__action-wrapper">
          <div className="header__btn-wrapper">
            <AddTaskBtn
              isMobile={isMobile}
              openPopup={openPopup}
              closePopup={closePopup}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
          <div className="header__elips elips-wrapper">
            <IconVerticalEllipsis />
          </div>
        </div>
      </div>
    </div>
  )
}
