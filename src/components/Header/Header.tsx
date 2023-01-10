import React, { useState } from 'react'
import { Title, Theme } from '../../@types/app'
import { Board } from '../../@types/board'

//Components
import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'
import { AddTaskBtn } from './AddTaskBtn'
import { LogoMobile } from '../elements/svg/logoMobile'
import { LogoDark } from '../elements/svg/logoDark'
import { LogoLight } from '../elements/svg/logoLight'
import { IconChevron } from './iconChevron'
import { Edit } from '../Forms/FormComponents/Edit'

type HeaderProps = {
  theme: Theme
  isMobile: boolean | undefined
  // openPopup: (key: string) => void
  openPopup: (key: string, isNewBoard?: boolean, objToDelete?: string) => void
  closePopup: (exception?: boolean) => void
  isSidebarOpen: boolean
  board: Board
  actionKanban: (type: string, key: string, value: string | Board) => void
  handleActiveBoard: (index: number) => void
  boardList: string[]
}

export const Header = ({
  theme,
  isMobile,
  openPopup,
  closePopup,
  isSidebarOpen,
  board,
  actionKanban,
  handleActiveBoard,
  boardList,
}: HeaderProps): JSX.Element => {
  const [isSubmenu, setIsSubmenu] = useState(false)
  let toggleSubmenu = () => {
    setIsSubmenu((prev) => !prev)
  }
  let handleSubmenu = (action: string) => {
    console.log('heye')
    toggleSubmenu()
    if (action == 'EDIT') {
      // closePopup()
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
          <h2 className={`header__head head_${theme} head_level-2`}>
            {board.name || undefined}
          </h2>
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
