import { combineReducers } from 'redux'
import salesState from './sales'
const salesApp = combineReducers({
    salesState
})
export default salesApp;