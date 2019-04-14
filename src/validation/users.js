
import * as Yup from 'yup'
import messages from '../validationMessages'

export const PostUsers = Yup.object().shape({
  displayName: Yup.string()
    .required(messages.required),
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.min)
    .required(messages.required)
})

PostUsers.validate({
  displayName: '',
  email: '',
  password: ''
}, { abortEarly: false })
  .catch(error => {
    console.log(error)
  })
