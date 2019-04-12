import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Formik } from 'formik'
import TestForm from './TestForm'
import * as Yup from 'yup'
import Counter from './Counter'

const validationSchema = Yup.object().shape({
  test: Yup.string()
    .min(2, 'something')
    .max(5, 'max something')
    .required('required')
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.initialValues = {
      test: 'haf'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const newCount = this.state.count + 1
    this.setState({ count: newCount })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Formik
            initialValues={this.initialValues}
            onSubmit={this.handleClick}
            validationSchema={validationSchema}
            render={(...formikProps) => {
              return <TestForm {...formikProps[0]} count={this.state.count} />
            }}
          />
        </header>
      </div>
    )
  }
}

export default App
