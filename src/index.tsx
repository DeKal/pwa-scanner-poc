import React from 'react'
import ReactDOM from 'react-dom'
import 'index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from 'app/App'
import * as serviceWorker from 'serviceWorker'
import { Provider } from 'react-redux'
import store from 'state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
