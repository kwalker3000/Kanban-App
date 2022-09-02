import React from 'react'
import { useAppContext } from '../../context/useAppContext'
import { LogoDark } from '../elements/svg/logoDark'
import { LogoLight } from '../elements/svg/logoLight'

//import { Theme, ContextType } from '../../@types/app'
// type HeaderProps = {
//   theme: string
// }

export const Header = () => {
  let { theme } = useAppContext()
  return (
    <div id="header">
      <div className={`header ${theme}-theme`}>
        <div>
          <div>{theme == 'dark' ? <LogoLight /> : <LogoDark />}</div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
