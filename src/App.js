
import React from 'react'
import withRoot from './withRoot'
import Home from './views/Home'
import About from './views/About'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={
          () => <Redirect to="/home" />
        }>
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    )
  }
}

export default withRoot(App)
