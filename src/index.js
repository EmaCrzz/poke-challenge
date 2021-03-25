import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'Routes'
import PokeContext from 'Context/PokeContext'
import TranslateContext from 'Context/TranslateContext'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import 'styles/globals.css'
import 'styles/transition.css'

ReactDOM.render(
  <BrowserRouter>
    <TranslateContext.Provider>
      <PokeContext.Provider>
        <Routes />
      </PokeContext.Provider>
    </TranslateContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()
reportWebVitals()
