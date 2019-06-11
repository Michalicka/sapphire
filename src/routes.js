
export const registration = '/registration'
export const login = '/login'
export const dashboard = '/dashboard'
export const projects = '/projects'
export const tasks = '/:id/tasks/:type'
export const tasksTypes = [
  {
    id: 1,
    name: 'backlog'
  },
  {
    id: 2,
    name: 'todo'
  },
  {
    id: 3,
    name: 'sprint'
  },
  {
    id: 4,
    name: 'progress'
  },
  {
    id: 5,
    name: 'testing'
  },
  {
    id: 6,
    name: 'done'
  }
]
