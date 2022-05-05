import { combineReducers } from "redux";

//Reducers
import loading from "./loading";

import contacts from "./contacts";

export default combineReducers({
  loading,
  contacts
});
