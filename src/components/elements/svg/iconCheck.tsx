import React from 'react'

type IconPropType = {
  isChecked: boolean
}

export const IconCheck = ({ isChecked }: IconPropType) => {
  return (
    <div>
      <svg
        aria-hidden={true}
        width="10"
        height="8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={isChecked ? '#FFF' : 'none'}
          strokeWidth="2"
          fill="none"
          d="m1.276 3.066 2.756 2.756 5-5"
        />
      </svg>
    </div>
  )
}
