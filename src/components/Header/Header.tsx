import React, { useState } from 'react'
import { Title, Theme } from '../../@types/app'

import colorTheme from '../../../styles/modules/colorTheme.module.scss'

import { IconVerticalEllipsis } from '../elements/svg/iconVerticalEllipsis'
import { AddTaskBtn } from './AddTaskBtn'
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
      <div
        className="header"
        style={{
          backgroundColor: `${
            theme == 'dark' ? colorTheme.darkgrey : colorTheme.white
          }`,
        }}
      >
        <div className="head-wrapper">
          {isMobile && (
            <div className="header__logo logo-wrapper">
              <LogoMobile />
            </div>
          )}
          <div></div>
          <h2
            className="header__head head_level-2"
            style={{
              color: `${theme == 'dark' ? colorTheme.white : colorTheme.black}`,
            }}
          >
            {title || undefined}
          </h2>
          <div>
            <IconChevron />
          </div>
        </div>
        <div className="header__action-wrapper">
          <div className="header__btn-wrapper">
            <AddTaskBtn isMobile={isMobile} />
          </div>
          <div className="header__elips elips-wrapper">
            <IconVerticalEllipsis />
          </div>
        </div>
      </div>
    </div>
  )
}
