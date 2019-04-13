
import React from 'react'
import withRoot from './withRoot'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Registration from './views/Registration'
import { registration } from './routes'

// const store = createStore(rootReducer)

export class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <Route
          exact
          path="/"
          render={() => <Redirect to={registration} />}
        />
        <Route path={registration} component={Registration} />
      </Router>
      // </Provider>
    )
  }
}

export default withRoot(App)
