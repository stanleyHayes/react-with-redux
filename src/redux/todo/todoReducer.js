import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO} from "./todoActionTypes";
import uniqid from "uniqid";

const initialTodoState = {
    todos: []
};

const todoReducer = function (state = initialTodoState, action) {
    let updatedTodos = null;
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {...action.payload, completed: false, dateCreated: new Date(), id: uniqid()}]
            };
        case EDIT_TODO:
            updatedTodos = state.todos.map(function (todo) {
                if (todo.id === action.payload.id) {
                    if (action.payload.title) {
                        todo.title = action.payload.title
                    }
                    if (action.payload.description) {
                        todo.description = action.payload.description
                    }
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos
            };
        case TOGGLE_TODO:
            updatedTodos = state.todos.map(function (todo) {
                if (action.payload === todo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos
            };

        case DELETE_TODO:
            updatedTodos = state.todos.filter(function (todo) {
                return todo.id !== action.payload;
            });

            return {
                ...state,
                todos: updatedTodos
            };

        default:
            return state;
    }
};

export default todoReducer;
