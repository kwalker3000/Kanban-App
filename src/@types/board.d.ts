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
  subtasks: Subtask[] | []
  // compiler doesn't recognize undefined 'subtasks', requires work around
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

// TODO boards may need id or restrict to unique names
