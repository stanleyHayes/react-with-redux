import {combineReducers} from "redux";

import todoReducer from "./todo/todoReducer";
import visibilityReducer from "./visibility/visibilityReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    visibility: visibilityReducer
});

export default rootReducer;
