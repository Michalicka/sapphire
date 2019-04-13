
import React from 'react'
import withRoot from './withRoot'
import Home from './views/Home'
import About from './views/About'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const store = createStore(rootReducer)

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" render={
            () => <Redirect to="/home" />
          }>
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Router>
      </Provider>
    )
  }
}

export default withRoot(App)
