import React from "react";
import Layout from "../components/layout/Layout";
import TodoList from "../components/shared/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {Container, Typography, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import filterTodos from "../utils/filterTodos";

function UncompletedTodosPages(props) {

    const {todo} = useSelector(function (state) {
        return state;
    });

    const dispatch = useDispatch();

    const todos = filterTodos(todo.todos, "SHOW_UNCOMPLETED");

    return (
        <Layout>
            <Container>
                {
                    (todo.todos.length === 0) ?
                        (
                            <div
                                style={{
                                    backgroundColor: "whitesmoke",
                                    minHeight: "93vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <Typography variant="h4">
                                    Don't waste your life.
                                </Typography>
                                <Button variant="text" size="large">
                                    <Link to="/create">Create a todo</Link>
                                </Button>
                            </div>
                        ) : (
                            <TodoList
                                dispatch={dispatch}
                                todos={todos}
                                title="Uncompleted"
                            />
                        )
                }
            </Container>
        </Layout>
    )
}

export default UncompletedTodosPages;
