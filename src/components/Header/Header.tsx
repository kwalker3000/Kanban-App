import React, { useState } from 'react'
import { Title, Theme } from '../../@types/app'

import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'
import { AddTaskBtn } from './AddTaskBtn'
import { LogoMobile } from '../elements/svg/logoMobile'
import { IconChevron } from '../elements/svg/iconChevron'

type HeaderProps = {
  title: Title
  theme: Theme
  isMobile: boolean | undefined
  openPopup: (key: string) => void
}

export const Header = ({
  title,
  theme,
  isMobile,
  openPopup,
}: HeaderProps): JSX.Element => {
  return (
    <div id="header">
      <div className={`header header_${theme}`}>
        <div className="head-wrapper">
          {isMobile && (
            <div className="header__logo logo-wrapper">
              <LogoMobile />
            </div>
          )}
          <div></div>
          <h2 className={`header__head head_${theme} head_level-2`}>
            {title || undefined}
          </h2>
          <div>
            <IconChevron />
          </div>
        </div>
        <div className="header__action-wrapper">
          <div className="header__btn-wrapper">
            <AddTaskBtn isMobile={isMobile} openPopup={openPopup} />
          </div>
          <div className="header__elips elips-wrapper">
            <IconVerticalEllipsis />
          </div>
        </div>
      </div>
    </div>
  )
}
