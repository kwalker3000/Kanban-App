import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'

import { AppWrapper } from '../src/context/useAppContext'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </SessionProvider>
  )
}

export default MyApp
