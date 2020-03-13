import React from "react";
import {List} from "@material-ui/core";
import TodoListItem from "./TodoListItem";

function TodoList({todos, title, dispatch}) {

    return (
        <List dense={true} title={title}>
            {todos.map(function (todo, index) {
                return (
                    <TodoListItem
                        dispatch={dispatch}
                        key={index}
                        todo={todo}
                    />
                )
            })}
        </List>
    )
}

export default TodoList;
