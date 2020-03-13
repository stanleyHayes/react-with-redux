import React from "react";
import Layout from "../components/layout/Layout";
import TodoList from "../components/shared/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import filterTodos from "../utils/filterTodos";

function CompletedTodosPage(props) {

    const {todo} = useSelector(function (state) {
        return state;
    });

    const todos = filterTodos(todo.todos, "SHOW_COMPLETED");

    const dispatch = useDispatch();

    return (
        <Layout>
            <Container>
                {
                    (todo.todos.length > 0 && todos.length === 0) ? (
                            <div
                                style={{
                                    backgroundColor: "whitesmoke",
                                    minHeight: "93vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <Typography variant="h5" style={{textAlign: "center"}}>
                                    Come on complete some tasks
                                </Typography>
                                <Typography variant="body2" style={{textAlign: "center"}}>
                                    You have {todos.length} uncompleted tasks
                                </Typography>
                            </div>
                        ) :
                        (todos.length === 0) ?
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
                                    title="Completed"
                                />

                            )
                }
            </Container>
        </Layout>
    )
}

export default CompletedTodosPage;
