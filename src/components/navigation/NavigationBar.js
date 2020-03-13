import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import "../../App.css";

function NavigationBar(props) {
    return (
        <AppBar>
            <Toolbar title="Todo" variant="dense">
                <Grid item={true} container={true} direction="row" justify="center">
                    <Grid item={true} variant="text">
                        <Button variant="text">
                            <Link style={{textDecoration: "none"}} to="/">Home</Link>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button variant="text">
                            <Link style={{textDecoration: "none"}} to="/completed">Completed</Link>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button variant="text">
                            <Link style={{textDecoration: "none"}} to="/uncompleted">Uncompleted</Link>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button variant="text">
                            <Link style={{textDecoration: "none"}} to="/create">Create</Link>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;
