
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const fixedDate = new Date()

/* eslint-disable no-global-assign */
Date = class extends Date {
  constructor() {
    super()

    return fixedDate
  }
}
