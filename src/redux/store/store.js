import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import reducer from "../reducers/reducer";

const initialState = {
    username: "",
    password:"",
    userStatus:"",
    msg:"",
    change:"aquib"
}

export default function configureStore() {
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}