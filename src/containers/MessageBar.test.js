
import { mapStateToProps, mapDispatchToProps } from './MessageBar'
import { changeMessagebarParam } from '../actions/messagebar'

describe('MessageBar container', () => {
  it('should return mapped state props', () => {
    const initialState = {
      messagebar: {
        open: true,
        message: 'message',
        variant: 'success'
      }
    }
    const mappedState = mapStateToProps(initialState)

    expect(mappedState.open).toEqual(initialState.messagebar.open)
    expect(mappedState.message).toEqual(initialState.messagebar.message)
    expect(mappedState.variant).toEqual(initialState.messagebar.variant)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.handleClose()
    expect(dispatch.mock.calls[0][0]).toEqual(changeMessagebarParam('open', false))
  })
})
