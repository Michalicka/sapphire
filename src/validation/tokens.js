
import * as Yup from 'yup'
import messages from '../validationMessages'

export const PostTokens = Yup.object().shape({
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.min)
    .required(messages.required)
})
