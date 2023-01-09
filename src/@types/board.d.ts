export type Status = 'todo' | 'doing' | 'done'
export type Subtask = {
  description: string
  status: Status
}

export type Task = {
  id: number
  title: string
  description: string
  status: Status
  subtasks: Subtask[] // | []
}

export type Column = {
  status: Status
  tasks: Task[] | []
}

export type Board = {
  name: string
  tasks: Task[]
}

export type Kanban = Board[]
