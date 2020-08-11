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
import ReloadAppToast from 'components/ReloadAppToast'

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
        autoClose={false}
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

const reloadContent = (serviceWorkerRegistration) => {
  toast.info(<ReloadAppToast />, {
    onClose: () => {
      const registrationWaiting = serviceWorkerRegistration.waiting

      if (registrationWaiting) {
        registrationWaiting.postMessage({ type: 'SKIP_WAITING' })

        registrationWaiting.addEventListener('statechange', (e) => {
          if (e.target.state === 'activated') {
            window.location.reload()
          }
        })
      }
    },
  })
}

serviceWorker.register(reloadContent)
