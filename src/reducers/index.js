// combine all the reducers into one and wrap up with root reducer

import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
