export type Theme = 'light' | 'dark'

export type ContextType = {
  theme: Theme
  toggleTheme: (theme: Theme) => void
}

export type Path = string
export type ImgProps = {
  imgSrc: Path
  text: string
  isRemote: boolean
}
