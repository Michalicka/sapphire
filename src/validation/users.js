
import * as Yup from 'yup'
import messages from '../validationMessages'

export const PostUsers = Yup.object().shape({
  displayName: Yup.string()
    .required(messages.required),
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.min(6))
    .required(messages.required)
})

console.log(PostUsers)
