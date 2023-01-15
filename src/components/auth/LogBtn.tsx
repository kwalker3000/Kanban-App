import { useSession, signIn, signOut } from 'next-auth/react'

import { LogoGitHub } from '../elements/svg/logoGitHub'

export const LogBtn = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <button className="submenu__btn" onClick={() => signOut()}>
        <span className="submenu__btn-txt body_level-1 _log">Sign out</span>
      </button>
    )
  } else {
    return (
      <button className="submenu__btn log__btn" onClick={() => signIn()}>
        <span className="submenu__btn-txt body_level-1 _log">Sign in</span>
        <span>
          <LogoGitHub />
        </span>
      </button>
    )
  }
}
