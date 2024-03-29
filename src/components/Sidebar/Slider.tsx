import React, { useState } from 'react'

import { Theme } from '../../@types/app'

// Components
import { IconDarkTheme } from '../elements/svg/iconDarkTheme'
import { IconLightTheme } from '../elements/svg/iconLightTheme'

type SliderProps = {
  theme: Theme
  toggleTheme: () => void
}

export const Slider = ({ theme, toggleTheme }: SliderProps) => {
  const [isToggle, setToggle] = useState(true)

  let handleToggle = () => {
    setToggle((pre) => !pre)
    toggleTheme()
  }

  return (
    <div className={`slider slider_${theme}`}>
      <div className="slider__content">
        <IconLightTheme />
        <div
          onClick={() => handleToggle()}
          className={`slider__btn-wrapper slider_active`}
          aria-label="toggle theme"
        >
          <button
            className={`slider__btn ${isToggle ? 'slide-right' : 'slide-left'}`}
            aria-label="toggle theme"
          ></button>
        </div>
        <IconDarkTheme />
      </div>
    </div>
  )
}
