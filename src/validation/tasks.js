
import * as Yup from 'yup'
import messages from '../validationMessages'

export const PostTasks = Yup.object().shape({
  title: Yup.string()
    .required(messages.required),
  term: Yup.string()
    .required(messages.required),
  assignee_id: Yup.number()
    .required(messages.required),
  status_id: Yup.number()
    .required(messages.required),
  duration: Yup.string()
    .required()
})
