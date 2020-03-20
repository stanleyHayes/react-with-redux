import React, {useState} from "react";
import {Card, CardContent, Container, CardMedia, TextField, Button, Typography, Grid, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

function SignUpPage(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#eeeeee",
            justifyContent: "center",
            alignItems: "center"
        },
        signInButton: {
            backgroundColor: "purple",
            color: "white"
        },
        logo: {
            width: 200,
            height: 200,
            textAlign: "center"
        },
        logoContainer: {
            display: "flex",
            justifyContent: "center"
        },
        textField: {
            marginTop: "4px",
            marginBottom: "4px"
        },
        button: {
            marginTop: "4px",
            marginBottom: "4px"
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({name: "",});
    const [loading, setLoading] = useState(false);
    const [openDateDialog, setOpenDateDialog] = useState(false);

    function handleUserChange(event) {

    }

    function handleUserLogin(event) {
        event.preventDefault();
        setLoading(true);
    }

    function handleBirthdayChange(date, value) {
        setUser({...user, birthday: date})
    }

    return (
        <div className={classes.container}>
            <Container>
                <Grid container={true} justify="center">
                    <Grid item={true} lg={6}>
                        <Card raised={true} elevation={2}>
                            <div>
                                <div className={classes.logoContainer}>
                                    <Avatar
                                        className={classes.logo}
                                        src="/static/images/logo512.png"/>
                                </div>
                                <Typography align="center" variant="h2">Buddies</Typography>
                                <Typography align="center" variant="h5">Sign Up</Typography>
                            </div>
                            <CardContent>
                                <form>
                                    <Typography gutterBottom={true} variant="overline">Full Name</Typography>
                                    <TextField
                                        label="Name"
                                        placeholder="Enter full name"
                                        fullWidth={true}
                                        required={true}
                                        className={classes.textField}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="text"
                                        value={user.name}
                                        name="name"
                                        id="name"
                                        variant="outlined"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Email</Typography>
                                    <TextField
                                        className={classes.textField}
                                        label="Email"
                                        placeholder="Enter email"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="email"
                                        value={user.email}
                                        name="email"
                                        id="email"
                                        variant="outlined"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Username</Typography>
                                    <TextField
                                        className={classes.textField}
                                        label="Username"
                                        placeholder="Enter username"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="text"
                                        variant="outlined"
                                        value={user.username}
                                        name="username"
                                        id="username"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Nick Name</Typography>
                                    <TextField
                                        className={classes.textField}
                                        label="Nickname"
                                        placeholder="Enter nickname"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="text"
                                        variant="outlined"
                                        value={user.nickname}
                                        name="nickname"
                                        id="nickname"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Birthday</Typography>

                                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                                    {/*    <KeyboardDatePicker*/}
                                    {/*        format="MM/dd/yyyy"*/}
                                    {/*        onChange={handleBirthdayChange}*/}
                                    {/*        allowKeyboardControl={true}*/}
                                    {/*        animateYearScrolling={true}*/}
                                    {/*        autoOk={true}*/}
                                    {/*        emptyLabel="Select Birthday"*/}
                                    {/*        inputVariant="outlined"*/}
                                    {/*        maxDate={new Date()}*/}
                                    {/*        variant="dialog"*/}
                                    {/*        showTodayButton={true}*/}
                                    {/*        label="Date picker inline"*/}
                                    {/*        clearable={true}*/}
                                    {/*        okLabel="Set Birthday"*/}
                                    {/*        value={user.birthday}*/}
                                    {/*        open={openDateDialog}*/}
                                    {/*        onOpen={() => setOpenDateDialog(true)}*/}
                                    {/*        onClose={() => setOpenDateDialog(false)}*/}
                                    {/*    />*/}
                                    {/*</MuiPickersUtilsProvider>*/}
                                    <Button
                                        variant="contained"
                                        size="medium"
                                        className={classes.signInButton}
                                        fullWidth={true}
                                        disabled={loading}
                                        onSubmit={handleUserLogin}
                                        onClick={handleUserLogin}>Sign Up</Button>

                                    <Button
                                        className={classes.button}
                                        variant="text"
                                        fullWidth={true}
                                        disabled={loading}
                                        onSubmit={handleUserLogin}
                                        onClick={handleUserLogin}>
                                        <Link to="/login">
                                            Already have an account? Login
                                        </Link>
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SignUpPage;
