import React, { useState } from 'react'

import { Theme } from '../../@types/app'

// Components
import { IconDarkTheme } from '../elements/svg/iconDarkTheme'
import { IconLightTheme } from '../elements/svg/iconLightTheme'

type SliderProps = {
  theme: Theme
}

export const Slider = ({ theme }: SliderProps) => {
  const [isToggle, setToggle] = useState(true)

  return (
    <div className="slider">
      <div className="slider__content">
        <IconLightTheme />
        <div
          onClick={() => setToggle((pre) => !pre)}
          className={`slider__btn-wrapper`}
          aria-label="toggle dark theme"
        >
          <button
            className={`slider__btn ${isToggle ? 'slide-right' : 'slide-left'}`}
            aria-label="toggle dark theme"
          ></button>
        </div>
        <IconDarkTheme />
      </div>
    </div>
  )
}
