import { applyMiddleware, createStore } from "redux";
import postsReducer from "./reducers/postReducers";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;