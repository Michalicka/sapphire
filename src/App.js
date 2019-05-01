
import React from 'react'
import withRoot from './withRoot'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Registration from './views/Registration'
import Login from './views/Login'
import { registration, login } from './routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import CssBaseline from '@material-ui/core/CssBaseline'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route
            exact
            path="/"
            render={() => <Redirect to={registration} />}
          />
          <Route path={registration} component={Registration} />
          <Route path={login} component={Login} />
        </Router>
        <CssBaseline />
      </Provider>
    )
  }
}

export default withRoot(App)
