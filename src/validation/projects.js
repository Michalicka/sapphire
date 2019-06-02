
import * as Yup from 'yup'
import messages from '../validationMessages'

export const PostProject = Yup.object().shape({
  name: Yup.string()
    .required(messages.required)
    .required(messages.required)
})

export const PutProjectMembers = Yup.object().shape({
  members: Yup.array()
})
