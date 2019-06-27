
import React from 'react'
import FormDialog from './FormDialog'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Formik } from 'formik'
import { shallow } from 'enzyme'
import ImageInputContainer from '../../containers/fields/ImageInputContainer'
import ProjectMembersSearch from '../../containers/redux-containers/ProjectMembersSearch'
import DateTimeField from '../fields/DateTimeField'

describe('FormDialog component', () => {
  let wrapper
  const props = {
    title: 'Title',
    fields: [
      { name: 'name' },
      { name: 'name2' },
      {
        name: 'name3',
        type: 'file'
      },
      {
        name: 'name4',
        type: 'projectMembersSearch'
      },
      {
        name: 'name5',
        type: 'dateTime'
      }
    ],
    send: jest.fn(),
    open: true,
    handleClose: jest.fn(),
    validationSchema: {},
    initialValues: { name: 'value', name2: 'value2', name3: 'value3' },
    errors: { name: 'error', name2: 'error2', name3: 'error3' },
    loading: true
  }

  beforeEach(() => {
    wrapper = shallow(<FormDialog {...props} />).dive()
  })

  it('should render title in dialog title component', () => {
    const dialogTitle = wrapper.find(DialogTitle)
    expect(dialogTitle.props().children).toBe(props.title)
  })

  it('should render expected count of textFields', () => {
    const form = wrapper.find(Formik).dive()
    const textFields = form.find(TextField)
    const imageInput = form.find(ImageInputContainer)
    const projectMembersSearch = form.find(ProjectMembersSearch)
    const dateTimeField = form.find(DateTimeField)
    expect(textFields.length + imageInput.length + projectMembersSearch.length + dateTimeField.length).toBe(props.fields.length)
  })

  it('should call send function after submit form', () => {
    wrapper.find(Formik).props().onSubmit()
    expect(props.send.mock.calls.length).toBe(1)
  })

  it('should has expected open prop', () => {
    expect(wrapper.find(Dialog).props().open).toBe(props.open)
  })

  it('should call handleClose after button Click', () => {
    const preventDefault = jest.fn()
    const closeButton = wrapper.find(Formik).dive().find(DialogActions).dive().find(Button).at(1)
    closeButton.props().onClick({ preventDefault })
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(preventDefault.mock.calls.length).toBe(1)
  })

  it('should add initialValues to textFields', () => {
    const textFields = wrapper.find(Formik).dive().find(TextField)
    const imageInput = wrapper.find(Formik).dive().find(ImageInputContainer)
    const { initialValues } = props
    expect(textFields.at(0).props().value).toBe(initialValues.name)
    expect(textFields.at(1).props().value).toBe(initialValues.name2)
    expect(imageInput.props().value).toBe(initialValues.name3)
  })

  it('should add initialValues to textFields', () => {
    const textFields = wrapper.find(Formik).dive().find(TextField)
    const imageInput = wrapper.find(Formik).dive().find(ImageInputContainer)
    const { errors } = props
    expect(textFields.at(0).props().helperText).toBe(errors.name)
    expect(textFields.at(1).props().helperText).toBe(errors.name2)
    expect(imageInput.props().helperText).toBe(errors.name3)
  })

  it('should show loader when loading prop is true', () => {
    const isDisplayed = wrapper.exists(CircularProgress)
    expect(isDisplayed).toBe(true)
  })
})
