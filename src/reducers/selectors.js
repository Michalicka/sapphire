
export const getItem = (data, id) => data.find(item => item.id === id) || {}

export const getValue = type => state => name => state[type][name]

export const getLoading = getValue('loading')

export const getErrors = getValue('errors')

export const getData = getValue('data')
