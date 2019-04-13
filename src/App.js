
import React from 'react'
import withRoot from './withRoot'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(rootReducer)

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        </Router>
      </Provider>
    )
  }
}

export default withRoot(App)
