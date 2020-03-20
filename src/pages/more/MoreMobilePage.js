import React from "react";
import Layout from "../../components/layout/Layout";
import {Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar} from "@material-ui/core";

import {
    CheckCircle,
    CheckOutlined,
    FormatListNumbered,
    Timeline,
    DeleteForever,
    ExitToApp,
    Edit,
    LockOpen
} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    avatar: {
        width: "200px",
        height: "200px"
    },
    container: {
        marginTop: "16px"
    },
    profileIcon: {
        color: "blue"
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
    timelineIcon: {
        color: "brown"
    },
    logoutIcon: {
        color: "pink"
    },
    changePasswordIcon: {
        color: "orange"
    },
    deleteIcon: {
        color: "red"
    },
    editProfileIcon: {
        color: "grey"
    }

});


function MoreMobilePage() {

    const classes = useStyles();

    return (
        <Layout>
            <Grid container={true} justify="center" spacing={4}>
                <Grid item={true} xs={12}>
                    <List>
                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <Avatar className={classes.profileIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Stanley" secondary="Visit Profile"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <FormatListNumbered className={classes.agendaIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Today's Agenda" secondary="View all agenda"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Completed" secondary="View completed agenda"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <CheckOutlined className={classes.uncompletedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Uncompleted" secondary="View uncompleted agenda"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <Timeline className={classes.timelineIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Storyline" secondary="View your life activities"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <CheckOutlined className={classes.uncompletedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Unaccomplished" secondary="Lifetime uncompleted agenda"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Accomplished" secondary="Lifetime completed agenda"/>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item={true} xs={12}>
                    <List>
                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <ExitToApp className={classes.logoutIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Logout"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <Edit className={classes.editIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Edit Profile"/>
                        </ListItem>

                        <ListItem divider={true}>
                            <ListItemAvatar>
                                <LockOpen className={classes.changePasswordIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Change Password"/>
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <DeleteForever className={classes.deleteIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Delete Account"/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default MoreMobilePage;
