
import * as Yup from 'yup'
import messages from '../validationMessages'

export const PostTasks = Yup.object().shape({
  title: Yup.string()
    .required(messages.required),
  term: Yup.string()
    .nullable(),
  description: Yup.string()
    .required(),
  duration: Yup.string()
    .nullable()
})

export const PutTasks = Yup.object().shape({
  title: Yup.string()
    .required(messages.required),
  term: Yup.string()
    .nullable(),
  status_id: Yup.number()
    .required(messages.required),
  description: Yup.string()
    .required(messages.required),
  duration: Yup.string()
    .nullable()
})

export const PostTaskComment = Yup.object().shape({
  content: Yup.string()
    .required(messages.required)
})
