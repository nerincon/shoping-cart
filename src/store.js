import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import items from './reducers/itemsReducer'

const middleware = [promise, logger]

export default createStore(items, applyMiddleware(...middleware))
