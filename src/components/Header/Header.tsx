import React, { useState } from 'react'
import { Theme } from '../../@types/app'
import { Board } from '../../@types/board'

// Components
import { AddTaskBtn } from './AddTaskBtn'
import { LogoMobile } from '../elements/svg/logoMobile'
import { LogoDark } from '../elements/svg/logoDark'
import { LogoLight } from '../elements/svg/logoLight'
import { IconChevron } from './iconChevron'
import { Edit } from '../Forms/FormComponents/Edit'
import { LogBtn } from '../auth/LogBtn'

type HeaderProps = {
  theme: Theme
  isMobile: boolean | undefined
  openPopup: (key: string, isNewBoard?: boolean, objToDelete?: string) => void
  closePopup: (exception?: boolean) => void
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
  const [isSubmenu, setIsSubmenu] = useState(false)
  let name =
    board.name && board.name.length >= 15
      ? board.name.slice(0, 15) + '...'
      : board.name
  let toggleSubmenu = () => {
    setIsSubmenu((prev) => !prev)
  }
  let handleSubmenu = (action: string) => {
    toggleSubmenu()
    if (action == 'EDIT') {
      openPopup('boardPopup', false)
    } else {
      openPopup('removePopup', false, 'board')
    }
  }

  return (
    <div id="header">
      <div
        className={`header header_${theme} ${isSidebarOpen && 'sidebar-state'}`}
      >
        <div className="head-wrapper">
          <div
            className={`header__logo logo-wrapper header_${
              !isMobile && isSidebarOpen && '_logo_sidebar'
            }`}
          >
            {isMobile ? (
              <LogoMobile />
            ) : theme == 'dark' ? (
              <LogoDark />
            ) : (
              <LogoLight />
            )}
          </div>
          <div
            className={`line line_${theme} line_${
              !isMobile && isSidebarOpen && 'sidebar'
            }`}
          ></div>
          <h2 className={`header__head head_${theme} head_level-2`}>{name}</h2>
          {isMobile && (
            <div>
              <IconChevron
                openPopup={openPopup}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          )}
        </div>
        <div className="header__action-wrapper">
          <div className="header__btn-wrapper">
            <AddTaskBtn
              isMobile={isMobile}
              openPopup={openPopup}
              closePopup={closePopup}
              isSidebarOpen={isSidebarOpen}
              taskSize={board.tasks.length}
            />
          </div>
          <div className="header__elips elips-wrapper">
            <Edit toggleSubmenu={toggleSubmenu} />
            {isSubmenu && (
              <div className={`header__submenu-wrapper submenu_${theme}`}>
                <div>
                  <button
                    onClick={() => handleSubmenu('EDIT')}
                    className="submenu__btn"
                  >
                    <span className="submenu__btn-txt body_level-1">
                      Edit Board
                    </span>
                  </button>
                  <button
                    onClick={() => handleSubmenu('DELETE')}
                    className="submenu__btn"
                  >
                    <span className="submenu__btn-txt body_level-1 _delete">
                      Delete Board
                    </span>
                  </button>
                  <LogBtn />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
