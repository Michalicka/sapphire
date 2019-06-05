
import { getItem, getValue, getData, getErrors, getLoading } from './selectors'

describe('selectors', () => {
  describe('getItem', () => {
    const data = [
      {
        id: 1,
        name: 'item'
      },
      {
        id: 2,
        name: 'item2'
      },
      {
        id: 3,
        name: 'item3'
      }
    ]
    it('getItem should return item object', () => {
      const id = 1

      expect(getItem(data, id)).toEqual(data[0])
    })

    it('getItem should return empty object', () => {
      const id = 5

      expect(getItem(data, id)).toEqual({})
    })
  })

  it('getValue should return expected value', () => {
    const state = {
      data: {
        value: 'value'
      }
    }

    expect(getValue('data')(state)('value')).toBe(state.data.value)
  })

  it('getData should return expected value', () => {
    const state = {
      data: {
        value: 'value'
      }
    }
    expect(getData(state)('value')).toBe(state.data.value)
  })

  it('getErrors should return expected value', () => {
    const state = {
      errors: {
        getData: {
          name: 'ęrror'
        }
      }
    }

    expect(getErrors(state)('getData')).toEqual(state.errors.getData)
  })

  it('getLoading should return expected value', () => {
    const state = {
      loading: {
        getData: {
          show: true
        }
      }
    }

    expect(getLoading(state)('getData')).toEqual(state.loading.getData)
  })
})
