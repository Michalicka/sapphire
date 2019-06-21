
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
