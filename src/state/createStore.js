import { createStore as reduxCreateStore } from 'redux'

const defaultState = { count: 0 }

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

export const createStore = initialState =>
  reduxCreateStore(reducer, initialState || defaultState)
