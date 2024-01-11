import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  product: productReducer
})

export default rootReducer