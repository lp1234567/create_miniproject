
import { createStore, combineReducers } from "redux";

import phoneEle from './phoneEle'

const appReducers = combineReducers({
    phoneEle
})

const store = createStore(appReducers)

export default store