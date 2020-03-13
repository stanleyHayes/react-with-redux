import {EDIT_TODO, ADD_TODO, TOGGLE_TODO, DELETE_TODO} from "./todoActionTypes";

export const addTodo = function (todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const editTodo = function (id, todo) {
    return {
        type: EDIT_TODO,
        payload: todo
    }
};

export const toggleTodo = function (id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
};

export const deleteTodo = function (id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
};
