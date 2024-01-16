import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk  from "redux-thunk";

const rootReducer = combineReducers({});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: composeWithDevTools(),
  });
export default store;
