import { combineReducers } from "redux";
import saveReducer from "./saveReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  save: saveReducer,
  user: userReducer
});

export default reducer;
