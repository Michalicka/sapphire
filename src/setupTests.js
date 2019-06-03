
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const fixedDate = new Date()

/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */
Date = class extends Date {
  constructor() {
    super()

    return fixedDate
  }
}

window.FileReader = class extends window.FileReader {
  readAsDataURL(result) {
    this.onload({
      target: {
        result
      }
    })
  }
}
