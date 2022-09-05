import React, { useState } from 'react'
import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'

import { Title, Theme } from '../../@types/app'
import { IconAddTask } from '../elements/svg/iconAddTask'
import { LogoMobile } from '../elements/svg/logoMobile'
import { IconChevron } from '../elements/svg/iconChevron'

type HeaderProps = {
  title: Title
  theme: Theme
  isMobile: boolean | undefined
}

export const Header = ({
  title,
  theme,
  isMobile,
}: HeaderProps): JSX.Element => {
  return (
    <div id="header">
      <div className={`header ${theme}-theme`}>
        <div className="head-wrapper">
          {isMobile && (
            <div className="header__logo logo-wrapper">
              <LogoMobile />
            </div>
          )}
          <div></div>
          <h2 className="header__head head_level-2">{title || undefined}</h2>
          <div>
            <IconChevron />
          </div>
        </div>
        <div className="header__action-wrapper">
          <div className="header__btn-wrapper">
            <IconAddTask isMobile={isMobile} />
          </div>
          <div className="header__elips elips-wrapper">
            <IconVerticalEllipsis />
          </div>
        </div>
      </div>
    </div>
  )
}
