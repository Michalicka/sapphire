
export function equalTo(ref, msg) {
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
