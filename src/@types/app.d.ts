export type Theme = 'light' | 'dark'
export type Title = string | undefined

export type Path = string
export type ImgProps = {
  imgSrc: Path
  text: string
  isRemote: boolean
}

type HEX = `#${string}`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
