import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import Starport from './components/Starport'
import FloatContainer from './components/FloatContainer'
import FloatProxy from './components/FloatProxy'
import App from './App'

import './assets/style/base.less'
import 'antd/dist/antd.less'
import 'antd/dist/antd.variable.min.css'

export { Starport, FloatContainer, FloatProxy }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
