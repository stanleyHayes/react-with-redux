import React, {useState} from "react";
import {Paper, TextField, Typography, Divider, Button} from "@material-ui/core";
import {addTodo} from "../../redux/todo/todoActionCreators";

function CreateTodoForm({dispatch}) {

    const [todo, setTodo] = useState({title: "", description: ""});
    const [error, setError] = useState({title: "", description: ""});
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    function handleTodoChange(event) {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    function handleTodoSubmit(event) {
        event.preventDefault();
        if (todo.title === "") {
            setTitleError(true);
            setError({...error, title: "Title Required"});
            return;
        }

        if (todo.description === "") {
            setDescriptionError(true);
            setError({...error, description: "Description Required"});
            return;
        }
        if (todo.title && todo.description) {
            dispatch(addTodo(todo));
            setTitleError(false);
            setDescriptionError(false);
            setTodo({...todo, title: "", description: ""});
            setError({...error, title: "", description: ""});
        }
    }

    return (
        <div style={{
            backgroundColor: "whitesmoke",
            minHeight: "93vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper style={{padding: 16}} elevation={4} variant="outlined">
                <form onSubmit={handleTodoSubmit}>
                    <Typography variant="overline" gutterBottom={true}>
                        Make it count
                    </Typography>

                    <TextField
                        error={titleError}
                        margin="dense"
                        helperText={error.title}
                        variant="outlined"
                        label="Title"
                        value={todo.title}
                        required={true}
                        fullWidth={true}
                        name="title"
                        type="text"
                        placeholder="Enter todo title"
                        onChange={handleTodoChange}
                    />

                    <Divider variant="fullWidth" style={{marginTop: 8, marginBottom: 8}}/>

                    <TextField
                        error={descriptionError}
                        margin="dense"
                        helperText={error.description}
                        variant="outlined"
                        label="Description"
                        value={todo.description}
                        required={true}
                        fullWidth={true}
                        name="description"
                        type="multiline"
                        rows={5}
                        multiline={true}
                        size="medium"
                        placeholder="Enter todo description"
                        onChange={handleTodoChange}
                    />

                    <Divider style={{marginTop: 8, marginBottom: 8}}/>

                    <Button
                        color="primary"
                        onClick={handleTodoSubmit}
                        variant="contained"
                        fullWidth={true}
                        size="small">Add Todo</Button>
                </form>
            </Paper>
        </div>
    )
}

export default CreateTodoForm;
