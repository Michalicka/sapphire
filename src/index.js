import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
