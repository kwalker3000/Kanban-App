import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { TaskForm } from '../../src/components/Forms/TaskForm'

describe('TaskForm', () => {
  afterEach(cleanup)

  beforeEach(() => {
    render(<TaskForm theme="dark" />)
  })

  it('renders TaskForm component', () => {
    const button = screen.getByRole('heading', {
      name: /add new task/i,
    })
    expect(button).toBeInTheDocument()
  })

  it('removes a subtask input field', async () => {
    const user = userEvent.setup()

    // subtask array initial size is 2
    const subtask = screen.getByTestId('subtask-1')
    expect(subtask).toBeInTheDocument()

    const button = screen.getByRole('button', {
      name: /remove subtask-1/i,
    })
    await user.click(button)

    // subtask array should now be size 1
    const removedSubtask = screen.queryByTestId('subtask-1')
    expect(removedSubtask).toBeNull()
  })

  it('adds a subtask input field', async () => {
    const user = userEvent.setup()

    // subtask array initial size is 2
    const subtask = screen.getByTestId('subtask-1')
    expect(subtask).toBeInTheDocument()

    const button = screen.getByRole('button', {
      name: /add subtask/i,
    })
    await user.click(button)

    // subtask array should now be size 3
    const newSubtask = screen.queryByTestId('subtask-2')
    expect(newSubtask).toBeInTheDocument()
  })
})
