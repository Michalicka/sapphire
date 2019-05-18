
import { mapDispatchToProps } from './CreateProjectButton'
import { changeModal } from '../actions/modal'

describe('CreateProjectButton', () => {
  it('it should return mapped action props', () => {
    const dispatch = jest.fn()
    const mappedAction = mapDispatchToProps(dispatch)

    mappedAction.clickHandler()

    expect(dispatch.mock.calls[0][0]).toEqual(changeModal('createProject'))
  })
})
