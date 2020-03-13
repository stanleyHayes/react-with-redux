import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {logger} from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(function () {
    console.log(store.getState().todo)
});

unsubscribe();
export default store;
