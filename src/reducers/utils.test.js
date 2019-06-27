
import { getDefaultValues, findItemIndex, mergeData, changeParam, changeDataParam, changeErrorsParam, changeLoadingParam, editItem, deleteItem } from './utils'

describe('reducers utils', () => {
  it('getDefaultValues', () => {
    const keys = ['one', 'two']
    const obj = {
      one: null,
      two: null
    }

    expect(getDefaultValues(keys)(null)).toEqual(obj)
  })

  it('findItemIndex', () => {
    const data = [
      {
        id: 1,
        name: 'name'
      },
      {
        id: 2,
        name: 'name2'
      }
    ]
    expect(findItemIndex(data, 2)).toBe(1)
  })

  describe('mergeData', () => {
    it('should return merged data when data is array', () => {
      const state = {
        data: [
          {
            id: 1,
            name: 'name'
          },
          {
            id: 2,
            name: 'name2'
          }
        ]
      }
      const newData = [
        {
          id: 3,
          name: 'name3'
        }
      ]

      const expectedData = [...state.data, ...newData]
      const expectedState = { ...state, data: expectedData }

      expect(mergeData(state, { data: newData })).toEqual(expectedState)
    })

    it('should return merged data when data is array', () => {
      const state = {
        data: {
          value: 'value'
        }
      }
      const newData = {
        value2: 'value2'
      }

      const expectedData = { ...state.data, ...newData }
      const expectedState = { ...state, data: expectedData }

      expect(mergeData(state, { data: newData })).toEqual(expectedState)
    })
  })

  describe('editParam', () => {
    const state = {
      data: {
        value: 'value'
      },
      errors: {
        getData: {
          name: 'error'
        }
      },
      loading: {
        getData: {
          show: false
        }
      }
    }

    it('should return expected state', () => {
      const expectedData = { ...state.data, value: 'value2' }
      const expectedState = { ...state, data: expectedData }

      expect(changeParam('data')(state, { key: 'value', value: 'value2' })).toEqual(expectedState)
    })

    it('should return expected state with edited data', () => {
      const expectedData = { ...state.data, value: 'value2' }
      const expectedState = { ...state, data: expectedData }

      expect(changeDataParam(state, { key: 'value', value: 'value2' })).toEqual(expectedState)
    })

    it('should return expected state with edited errors', () => {
      const expectedErrors = { ...state.errors, getData: {} }
      const expectedState = { ...state, errors: expectedErrors }

      expect(changeErrorsParam(state, { key: 'getData', value: {} })).toEqual(expectedState)
    })

    it('should return expected state with edited loading', () => {
      const expectedLoading = { ...state.errors, getData: { show: true } }
      const expectedState = { ...state, loading: expectedLoading }

      expect(changeLoadingParam(state, { key: 'getData', value: { show: true } })).toEqual(expectedState)
    })
  })

  it('editItem', () => {
    const state = {
      data: [
        {
          id: 1,
          name: 'name'
        },
        {
          id: 2,
          name: 'name2'
        }
      ]
    }

    const expectedState = {
      data: [{ ...state.data[0] }, { ...state.data[1], name: 'name3' }]
    }

    expect(editItem(state, { id: 2, data: { name: 'name3' } })).toEqual(expectedState)
  })

  it('deleteItem', () => {
    const state = {
      data: [
        {
          id: 1,
          name: 'name'
        },
        {
          id: 2,
          name: 'name2'
        }
      ]
    }

    const expectedState = {
      data: [{ ...state.data[1] }]
    }

    expect(deleteItem(state, { id: 1 })).toEqual(expectedState)
  })
})
