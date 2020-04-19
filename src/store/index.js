import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import middleware from '../middleware'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store
