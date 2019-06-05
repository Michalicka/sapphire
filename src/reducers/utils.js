
export const getDefaultValues = keys => defaultValue => {
  const obj = {}
  keys.forEach(key => {
    obj[key] = defaultValue
  })
  return obj
}

export const findItemIndex = (data, id) => data.findIndex(item => item.id === id)

export const mergeData = (state, { data }) => {
  let newData
  if (Array.isArray(state.data)) {
    newData = [...state.data, ...data]
  } else {
    newData = { ...state.data, ...data }
  }
  return { ...state, data: newData }
}

export const editParam = area => (state, { key, value }) => {
  const areaValue = { ...state[area], [key]: value }
  return { ...state, [area]: areaValue }
}

export const editDataParam = editParam('data')
export const editErrorsParam = editParam('errors')
export const editLoadingParam = editParam('loading')

export const editItem = (state, { id, data }) => {
  const index = findItemIndex(state.data, id)
  const newItem = { ...state.data[index], ...data }
  const newData = [...state.data]
  newData.splice(index, 1, newItem)
  return { ...state, data: newData }
}

export const deleteItem = (state, { id }) => {
  const newData = [...state.data]
  newData.splice(findItemIndex(state.data, id), 1)
  return { ...state, data: newData }
}
