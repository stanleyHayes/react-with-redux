import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from "../redux/visibility/visibilityActionTypes";

const filterTodos = function (todos, filter) {

    let updatedTodoList = null;

    switch (filter) {
        case SHOW_ALL:
            updatedTodoList = todos.filter(function (todo) {
                return todo;
            });
            break;
        case SHOW_COMPLETED:
            updatedTodoList = todos.filter(function (todo) {
                return todo.completed;
            });
            break;
        case SHOW_UNCOMPLETED:
            updatedTodoList = todos.filter(function (todo) {
                return !todo.completed;
            });
            break;
        default:
            updatedTodoList = todos.filter(function (todo) {
                return todo;
            });
    }

    return updatedTodoList;

};

export default filterTodos;
