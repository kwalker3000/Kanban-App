import React, { useState, createContext, useContext } from 'react'
import { Theme, ContextType } from '../@types/app'

// type Theme = 'light' | 'dark'
// type ContextType = {
//   theme: Theme
//   toggleTheme: (theme: Theme) => void
// }

const AppContext = createContext<ContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

type Props = {
  children: React.ReactNode
}

export const AppWrapper = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>('dark') // TODO systems default

  let toggleTheme = () => {
    setTheme((curTheme) => (curTheme == 'dark' ? 'light' : 'dark'))
  }
  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
