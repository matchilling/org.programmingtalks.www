/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import { createStore, loadState, saveState } from './src/state'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const state = loadState()
  const store = createStore(state)

  // store.subscribe(() => {
  //   saveState(store.getState())
  // })

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
