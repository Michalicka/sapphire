
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

export function fileType(acceptsTypes, msg) {
  return this.test({
    name: 'fileType',
    exclusive: false,
    message: msg,
    params: {
      acceptsTypes: acceptsTypes.join(', ')
    },
    test(value) {
      const extension = value.substring('data:image/'.length, value.indexOf(';base64'))
      return acceptsTypes.some(type => type === extension)
    }
  })
}
