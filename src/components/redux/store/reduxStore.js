import { createStore } from 'redux'
import reducers from '../reducers/loginReducers'

const store = createStore(reducers)
export default store;
