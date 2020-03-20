import React, {useState} from "react";
import Layout from "../components/layout/Layout";
import TodoList from "../components/shared/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import filterTodos from "../utils/filterTodos";

function AllTodosPage(props) {

    const [visibility, setVisibility] = useState("SHOW_ALL");

    const {todo} = useSelector(function (state) {
        return state;
    });

    const [todos, setTodos] = useState(filterTodos(todo.todos, visibility));

    function handleTodosChange(todos) {
        setTodos(todos);
    }


    const dispatch = useDispatch();

    return (
        <Layout>
            <div style={{backgroundColor: "whitesmoke"}}>
                <Container>
                    {
                        (todos.length === 0) ?
                            (
                                <div
                                    style={{
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
                                    title="All Todo"
                                />
                            )
                    }
                </Container>
            </div>
        </Layout>
    )
}

export default AllTodosPage;
