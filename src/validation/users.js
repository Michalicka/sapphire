
import * as Yup from 'yup'
import messages from '../validationMessages'

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path
    },
    test(value) {
      return value === this.resolve(ref)
    }
  })
}

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
