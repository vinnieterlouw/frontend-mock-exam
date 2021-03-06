import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import space from "./space/reducer";

export default combineReducers({
  appState,
  user: user,
  space: space,
});
