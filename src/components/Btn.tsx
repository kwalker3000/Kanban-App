type BtnProps = {
  text: string
}

export const Btn = ({ text }: BtnProps): JSX.Element => {
  return (
    <button className="btn">
      <span className="btn-text">{text}</span>
    </button>
  )
}
