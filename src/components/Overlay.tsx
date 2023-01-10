import React, { useState } from 'react'

type OverlayProps = {
  isOpen: () => boolean
  closePopup: () => void
  isMobile: boolean
  isSidebar: boolean
}

export const Overlay = ({
  isOpen,
  closePopup,
  isMobile,
  isSidebar,
}: OverlayProps) => {
  let isDisable = !isMobile && isSidebar
  const display = isOpen() && !isDisable ? 'block' : 'none'
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
