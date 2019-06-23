
export const getItem = (items, id) => items.find(item => item.id === parseInt(id)) || {}

export const filterTasks = (items, id) => items.filter(item => item.status.id === id)

export const getValue = type => state => name => state[type][name]

export const getLoading = getValue('loading')

export const getErrors = getValue('errors')

export const getData = getValue('data')
