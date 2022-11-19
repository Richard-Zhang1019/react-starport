import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import Loading from '@/components/Loading'

import './assets/style/base.less'
import 'antd/dist/antd.less'
import 'antd/dist/antd.variable.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
)
