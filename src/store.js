import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import items from './reducers/itemsReducer'

const middleware = [thunk, logger];


export default createStore(items, applyMiddleware(...middleware))
