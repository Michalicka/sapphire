
export class LocalStorageMock {
  constructor() {
    this.items = {}
  }

  setItem(key, value) {
    this.items[key] = value
  }

  getItem(key) {
    return this.items[key] || null
  }

  removeItem(key) {
    delete this.items[key]
  }

  clear() {
    this.items = {}
  }
}
