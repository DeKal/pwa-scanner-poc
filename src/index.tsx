import React from 'react'
import ReactDOM from 'react-dom'
import 'index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import App from 'app/App'
import * as serviceWorker from 'serviceWorker'
import { Provider } from 'react-redux'
import store from 'state'
import { ToastContainer, toast } from 'react-toastify'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="bottom-center"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

const reloadContent = (isAvailable: boolean) => {
  if (isAvailable) {
    toast('New Update available! Reload the webapp now!')
  }
}

serviceWorker.register(reloadContent)
