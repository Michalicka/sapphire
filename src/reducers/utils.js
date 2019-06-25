
export const getDefaultValues = keys => defaultValue => {
  const obj = {}
  keys.forEach(key => {
    obj[key] = defaultValue
  })
  return obj
}

export const findItemIndex = (data, id) => data.findIndex(item => item.id === parseInt(id))

export const mergeData = (state, { data }) => {
  let newData
  if (Array.isArray(state.data)) {
    newData = [...state.data, ...data]
  } else {
    newData = { ...state.data, ...data }
  }
  return { ...state, data: newData }
}

export const changeParam = area => (state, { key, value }) => {
  const areaValue = { ...state[area], [key]: value }
  return { ...state, [area]: areaValue }
}

export const changeDataParam = changeParam('data')
export const changeErrorsParam = changeParam('errors')
export const changeLoadingParam = changeParam('loading')

export const pushToDataParam = (state, { key, value }) => {
  if (state.data[key].every(item => item.id !== value.id)) {
    const param = [...state.data[key], value]
    const data = { ...state.data, [key]: param }
    return { ...state, data }
  } else {
    return state
  }
}

export const editItem = (state, { id, data }) => {
  const index = findItemIndex(state.data, id)
  const newItem = { ...state.data[index], ...data }
  const newData = [...state.data]
  newData.splice(index, 1, newItem)
  return { ...state, data: newData }
}

export const addItem = (state, { item }) => {
  const newItem = { ...item }
  const data = [...state.data, newItem]
  return { ...state, data }
}

export const deleteItem = (state, { id }) => {
  const data = state.data.filter(item => item.id !== id)
  return { ...state, data }
}

export const changeData = (state, { data }) => {
  return { ...state, data }
}
