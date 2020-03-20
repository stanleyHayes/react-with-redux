import React from "react";
import Layout from "../../components/layout/Layout";
import {Card, CardContent, Grid, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardMedia: {
        height: 0,
        width: "100%",
        paddingTop: '56.25%'
    },
    container: {
        marginTop: 100
    }
});

function MoreDesktopPage() {

    const classes = useStyles();

    return (
        <Layout>
            <Grid container={true} direction="column" alignItems="stretch" spacing={5} className={classes.container}>
                <Grid item={true} container={true} spacing={3} alignItems="center">

                    <Grid md={6} lg={4} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Profile</Typography>
                                <Typography variant="body2">View Personal Information</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={4} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Today's Agenda</Typography>
                                <Typography variant="body2">25 Agenda Today</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={4} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Completed Agenda</Typography>
                                <Typography variant="body2">15 Agenda Completed of 25</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={4} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Active Agenda</Typography>
                                <Typography variant="body2">10 Active Agenda of 25</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={4} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Storyline</Typography>
                                <Typography variant="body2">2500 All Time Agenda</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={4} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Accomplished</Typography>
                                <Typography variant="body2">2350 All Time Accomplished</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid item={true} container={true} alignItems="center" spacing={3}>

                    <Grid md={6} lg={3} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Edit Profile</Typography>
                                <Typography variant="body2">Update Profile Information</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={3} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Logout</Typography>
                                <Typography variant="body2">Exit App Temporarily</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={3} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Change Password</Typography>
                                <Typography variant="body2">Update Password</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid md={6} lg={3} item={true}>
                        <Card raised={true} elevation={2}>
                            <CardMedia className={classes.cardMedia} src="/static/images/profile.jpg"/>
                            <CardContent>
                                <Typography variant="h6">Delete Account</Typography>
                                <Typography variant="body2">Game Over</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        </Layout>
    )
}

export default MoreDesktopPage;
