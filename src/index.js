import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

)

reportWebVitals()
