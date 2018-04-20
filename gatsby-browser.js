/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createStore, loadState, saveState } from './src/state'

exports.replaceRouterComponent = ({ history }) => {
  const state = loadState()
  const store = createStore(state)

  // store.subscribe(() => {
  //   saveState(store.getState())
  // })

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
