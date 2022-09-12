import { Kanban } from '../../src/@types/board'

let mockBoardData: Kanban = [
  {
    name: 'my project',
    todo: {
      title: 'todo',
      tasks: [
        {
          title: 'bug#121',
          description: 'user cannot log in',
          status: 'todo',
          subtasks: [
            {
              description: 'refactor getUser function',
              status: 'todo',
            },
          ],
        },
      ],
    },
  },
]
