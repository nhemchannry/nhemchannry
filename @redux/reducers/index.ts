import { combineReducers } from "redux";
import playerSlice from "./playerSlice";

export default combineReducers({
  player: playerSlice,
});
