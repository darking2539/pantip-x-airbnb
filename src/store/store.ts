import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
//import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "./reducer"

const composedEnhancer = composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer as any, composedEnhancer);
export default store;