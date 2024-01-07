import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './View/App'
import './index.css'
import { Provider } from 'react-redux'
import store from './ViewModel/store/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
  </StrictMode>
)
