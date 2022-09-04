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
  //TODO test chevron up or down
})
