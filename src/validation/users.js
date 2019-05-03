
import * as Yup from 'yup'
import messages from '../validationMessages'
import { equalTo } from './yupMethods'

Yup.addMethod(Yup.string, 'equalTo', equalTo)

export const PostUsers = Yup.object().shape({
  name: Yup.string()
    .required(messages.required),
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.min)
    .required(messages.required),
  password_confirmation: Yup.string()
    .equalTo(Yup.ref('password'), messages.equalTo)
})

export const Login = Yup.object().shape({
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.min)
    .required(messages.required)
})
