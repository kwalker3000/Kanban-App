import React, { useState } from 'react'

type OverlayProps = {
  isOpen: () => boolean
  closePopup: () => void
}

export const Overlay = ({ isOpen, closePopup }: OverlayProps) => {
  const display = isOpen() ? 'block' : 'none'
  // const display = isOpen() ? 'none' : 'none'
  return (
    <div
      onClick={() => closePopup()}
      className="overlay"
      style={{ display: display }}
      data-testid="overlay"
    ></div>
  )
}
