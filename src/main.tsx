import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@app/App.tsx'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

createRoot(document.getElementById('root')!).render(
  <Fragment>
    <App />
  </Fragment>,
)
