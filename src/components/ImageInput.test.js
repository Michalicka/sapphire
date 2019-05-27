
import React from 'react'
import { shallow } from 'enzyme'
import ImageInput from './ImageInput'
import Avatar from '@material-ui/core/Avatar'
import FormHelperText from '@material-ui/core/FormHelperText'
import IconButton from '@material-ui/core/IconButton'

describe('ImageInput component', () => {
  let props

  beforeEach(() => {
    props = {
      name: 'imageInput',
      error: false,
      helperText: '',
      value: '',
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn()
    }
  })

  it('should render expected name from props', () => {
    const wrapper = shallow(<ImageInput {...props} />).dive()
    const input = wrapper.find('input')
    const inputProps = input.props()

    expect(inputProps.name).toBe(props.name)
  })

  it('should call onChange and onBlur props on onChagne input event', () => {
    const wrapper = shallow(<ImageInput {...props} />).dive()
    const input = wrapper.find('input')
    const value = 'value'
    const result = 'result'

    input.props().onChange({
      currentTarget: {
        value,
        files: [result]
      }
    })

    expect(props.setFieldValue.mock.calls[0][0]).toBe(props.name)
    expect(props.setFieldValue.mock.calls[0][1]).toBe(result)
    expect(props.setFieldTouched.mock.calls[0][0]).toBe(props.name)
    expect(props.setFieldTouched.mock.calls[0][1]).toBe(true)
  })

  it('should show avatar when value is set', () => {
    const newProps = { ...props, value: 'value' }
    const wrapper = shallow(<ImageInput {...newProps} />).dive()
    const avatar = wrapper.find(Avatar)

    expect(avatar.props().src).toBe(newProps.value)
  })

  it('should show error helperText when error prop is true', () => {
    const newProps = { ...props, error: true, helperText: 'error' }
    const wrapper = shallow(<ImageInput {...newProps} />).dive()
    const helperText = wrapper.find(FormHelperText)
    const helperTextProps = helperText.props()

    expect(helperTextProps.error).toBe(newProps.error)
    expect(helperTextProps.children).toBe(newProps.helperText)
  })

  it('should remove the value afterClick on delete IconButton', () => {
    const newProps = { ...props, value: 'value' }
    const wrapper = shallow(<ImageInput {...newProps} />).dive()

    const iconButton = wrapper.find(IconButton)
    iconButton.props().onClick()

    expect(props.setFieldValue.mock.calls[0][0]).toBe(props.name)
    expect(props.setFieldValue.mock.calls[0][1]).toBe('')
    expect(props.setFieldTouched.mock.calls[0][0]).toBe(props.name)
    expect(props.setFieldTouched.mock.calls[0][1]).toBe(true)
  })
})
