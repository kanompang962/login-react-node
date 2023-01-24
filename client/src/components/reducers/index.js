import {combineReducers} from "redux";
import { useReducer, userReducer } from "./userReducer";

const rootReducer = combineReducers({
    user : userReducer,
});

export default rootReducer;