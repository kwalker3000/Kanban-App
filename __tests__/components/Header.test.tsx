import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from '../../src/components/Header/Header'

describe('Header', () => {
  afterEach(cleanup)

  it('renders Header component', () => {
    render(<Header />)

    const button = screen.getByRole('button', {
      name: /add task/i,
    })

    expect(button).toBeInTheDocument()
  })

  it('renders Header with light theme', () => {
    let { container } = render(
      <Header title="project" theme="light" isMobile="true" />
    )

    const header = container.getElementsByClassName('header')
    const head = container.getElementsByClassName('header__head')
    const styleHeader = window.getComputedStyle(header[0])
    const styleHead = window.getComputedStyle(head[0])

    expect(styleHeader.backgroundColor).toBe('white')
    expect(styleHead.color).toBe('black')
  })

  it('renders Header with dark theme', () => {
    let { container } = render(
      <Header title="project" theme="dark" isMobile="true" />
    )

    const header = container.getElementsByClassName('header')
    const head = container.getElementsByClassName('header__head')
    const styleHeader = window.getComputedStyle(header[0])
    const styleHead = window.getComputedStyle(head[0])

    expect(styleHeader.backgroundColor).toBe('darkgray')
    expect(styleHead.color).toBe('white')
  })

  //TODO test chevron up or down
})
