import { Kanban } from '../src/@types/board'

let initialState: Kanban = [
  {
    id: 1,
    name: 'Week 52',
    tasks: [
      {
        id: 1,
        title: 'Cut Grass',
        description: 'Do some grass cutting',
        status: 'todo',
        subtasks: [
          {
            description: 'Get gas for lawnmower',
            status: 'todo',
          },
          {
            description: 'Check weather conditions',
            status: 'todo',
          },
        ],
      },
      {
        id: 2,
        title: 'Create design mockup',
        description: 'For Amex board a new design is wanted',
        status: 'todo',
        subtasks: [
          {
            description: 'Pickup materials from vendors',
            status: 'todo',
          },
          {
            description: 'Do survey on current users',
            status: 'todo',
          },
          {
            description: 'Gather input from non users',
            status: 'todo',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Education',
    tasks: [
      {
        id: 1,
        title: 'Get A on next math test',
        description: 'Ace my next math test',
        status: 'todo',
        subtasks: [
          {
            description: 'Go over the material',
            status: 'todo',
          },
        ],
      },
      {
        id: 2,
        title: 'Organize Educational material',
        description: 'Currently, all my resources are messy',
        status: 'todo',
        subtasks: [
          {
            description: 'Gather all materials',
            status: 'todo',
          },
          {
            description: 'Make folders for each subject',
            status: 'todo',
          },
          {
            description: 'Prioritize important subjects',
            status: 'todo',
          },
          {
            description: 'Make a resource index, like library',
            status: 'todo',
          },
        ],
      },
    ],
  },
]

export default initialState
