
import * as Yup from 'yup'
import messages from '../validationMessages'
import { equalTo, fileType } from './yupMethods'

Yup.addMethod(Yup.string, 'equalTo', equalTo)
Yup.addMethod(Yup.string, 'fileType', fileType)

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

export const PutUsers = Yup.object().shape({
  name: Yup.string()
    .required(messages.required),
  email: Yup.string()
    .email(messages.email)
    .required(messages.required)
})

export const PutPasswords = Yup.object().shape({
  password: Yup.string()
    .min(6, messages.min)
    .required(messages.required),
  password_confirmation: Yup.string()
    .equalTo(Yup.ref('password'), messages.equalTo)
})

export const PostAvatar = Yup.object().shape({
  photo: Yup.string()
    .required(messages.required)
    .fileType(['jpeg', 'jpg', 'png'], messages.fileType)
})
