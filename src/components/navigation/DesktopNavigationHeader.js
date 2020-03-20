import React from "react";
import {Toolbar, Grid, Button, Typography, Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

import {
    CheckCircle,
    CheckOutlined,
    FormatListNumbered,
    MoreVert
} from "@material-ui/icons";

function DesktopNavigationHeader(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            flex: 1
        },
        title: {
            color: "purple"
        },
        navLinks: {
            flexGrow: 1
        },
        avatar: {},
        titleContainer: {},
        checkIcon: {
            color: "green",
            marginRight: 16
        },
        brandContainer: {
            display: "flex",
            alignItems: "center",
            paddingRight: 16
        },
        agendaIcon: {
            color: "purple"
        },
        completedIcon: {
            color: "green"
        },
        uncompletedIcon: {
            color: "orangered"
        },
        moreIcon: {
            color: "brown"
        }
    });

    const classes = useStyles();

    return (
        <Toolbar title="Todo" variant="regular">
            <div className={classes.container}>
                <div className={classes.brandContainer}>
                    <CheckCircle className={classes.checkIcon}/>
                    <Typography className={classes.title} variant="h5">Make it Count</Typography>
                </div>
                <div>
                    <Grid item={true} container={true} direction="row" justify="center">

                        <Grid item={true}>
                            <Button variant="text">
                                <FormatListNumbered className={classes.agendaIcon}/>
                                <Link style={{textDecoration: "none"}} to="/">Agenda</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <CheckCircle className={classes.completedIcon}/>
                                <Link style={{textDecoration: "none"}} to="/completed">Completed</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <CheckOutlined className={classes.uncompletedIcon}/>
                                <Link style={{textDecoration: "none"}} to="/uncompleted">Uncompleted</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <MoreVert className={classes.moreIcon}/>
                                <Link style={{textDecoration: "none"}} to="/more">More</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Avatar/>
                </div>
            </div>

        </Toolbar>
    )
}

export default DesktopNavigationHeader;
