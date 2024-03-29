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
  subtasks: Subtask[]
}

export type Board = {
  id: number
  name: string
  tasks: Task[]
}

export type Kanban = Board[]
