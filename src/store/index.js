import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer1 from './reducer/index'

const store = createStore(reducer1, applyMiddleware(thunk))

export default store;