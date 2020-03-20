import React, {useState} from "react";
import {
    MenuItem,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, Menu
} from "@material-ui/core";
import {CheckCircleOutlined, CheckCircle, MoreHoriz} from "@material-ui/icons";
import {toggleTodo, deleteTodo} from "../../redux/todo/todoActionCreators";

function TodoListItem({todo, dispatch}) {

    const {id, title, completed, description} = todo;
    const [opened, setOpened] = useState(false);
    const [anchorElement, setAnchorElement] = useState(null);

    function handleCompletedChange() {
        dispatch(toggleTodo(id));
        setAnchorElement(null);
        setOpened(false);
    }

    function handleEditClicked() {

        setAnchorElement(null);
        setOpened(false);
    }

    function handleDeleteClicked() {
        dispatch(deleteTodo(id));
        setAnchorElement(null);
        setOpened(false);
    }


    function handleMoreActionsClicked(event) {
        setAnchorElement(event.currentTarget);
        setOpened(true);
    }


    return (
        <ListItem divider={true}>

            <ListItemAvatar>
                <ListItemIcon>
                    {(completed) ?
                        <CheckCircle fontSize="large" color="primary"/> :
                        <CheckCircleOutlined fontSize="large" color="secondary"/>
                    }
                </ListItemIcon>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={description}
            />
            <ListItemSecondaryAction>
                <MoreHoriz
                    color="secondary"
                    fontSize="small"
                    onClick={handleMoreActionsClicked}
                    elevation={4}
                />
                <Menu open={opened} anchorEl={anchorElement}>
                    <MenuItem
                        onClick={handleCompletedChange}>{completed ? "Set Uncompleted" : "Set Completed"}</MenuItem>
                    <MenuItem onClick={handleEditClicked}>Edit</MenuItem>
                    <MenuItem onClick={handleDeleteClicked}>Delete</MenuItem>
                </Menu>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem;
