type Status = 'todo' | 'doing' | 'done'
export type Subtask = {
  description: string
  status: Status
}

export type Task = {
  title: string
  description: string
  status: Status
  subtasks: Subtask[]
}

type Column = {
  title: Status
  tasks: Task[]
}

type Board = {
  name: string
  todoCol?: Column
  doingCol?: Column
  doneCol?: Column
}

export type Kanban = Board[]

// [{
//   boardName: "my project",
//   todo: {
//     title: todo,
//     tasks: [
//       {
// 	title: 'bug#121',
// 	description: 'user cannot log in',
// 	status: 'todo',
// 	subtasks: [
// 	  {
// 	    description: 'refactor getUser function',
// 	    status: 'todo'
// 	  }
// 	]
//       }
//     ]
//   }
// }]

// type Subtask = {
//   description: string
//   status: Status
// }
