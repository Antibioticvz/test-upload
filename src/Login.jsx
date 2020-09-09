import React, { useState, useContext } from "react";
import { navigate } from "hookrouter";
import * as EmailValidator from "email-validator";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import FirebaseContext from "./Firebase";

import Back from "./images/back.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Back})`,
    backgroundSize: "contain",
    marginBottom: 230,
  },
  gridButtons: {
    marginTop: 60,
  },
  gridContainer: {
    padding: "0 35px",

    [theme.breakpoints.up("sm")]: {
      padding: "0 185px",
    },
  },
  gridMidContainer: {
    background: "#fff",
    marginTop: 9,
  },
  field: {
    marginTop: 16,
  },
  submitButton: {
    marginTop: 18,
  },
  sub: {
    ontSize: 14,
    margin: "22px 0 0",
    textAlign: "center",
  },
  button: {
    fontWeight: "bold",
  },
}));

const New = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);

  const [errMessage, setErrMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlPasswordSignup = () =>
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser.user.uid);
        localStorage.setItem(
          process.env.REACT_APP_LOCAL_STORAGE,
          authUser.user.uid
        );
      })
      .then(() => navigate("/upload"))
      .catch(({ message }) => setErrMessage(message));

  return (
    <>
      <TextField
        value={email}
        className={classes.field}
        fullWidth
        label="Your Email Address"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />

      <TextField
        value={password}
        className={classes.field}
        fullWidth
        type="password"
        label="Your Password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <Typography color="error">
        {password !== confirmPassword &&
          password !== "" &&
          confirmPassword !== "" &&
          "No match"}
      </Typography>

      <TextField
        value={confirmPassword}
        className={classes.field}
        fullWidth
        type="password"
        label="Confirm Password"
        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
      />
      <Typography color="error">{errMessage}</Typography>
      <Button
        disabled={
          email === "" ||
          !EmailValidator.validate(email) ||
          password === "" ||
          password.length < 7 ||
          password !== confirmPassword
        }
        className={classes.submitButton}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => handlPasswordSignup()}
      >
        Create Account
      </Button>
    </>
  );
};

const Old = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);

  const [errMessage, setErrMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleErrorMsg = (message) => {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    firebase.doSignOut();
    setErrMessage(message);
  };

  const handlePasswordLogin = () => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser.user.uid);
        localStorage.setItem(
          process.env.REACT_APP_LOCAL_STORAGE,
          authUser.user.uid
        );
      })
      .then(() => navigate("/upload"))
      .catch(({ message }) => handleErrorMsg(message));
  };

  return (
    <>
      <TextField
        value={email}
        className={classes.field}
        fullWidth
        label="Your Email Address"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextField
        value={password}
        className={classes.field}
        fullWidth
        type="password"
        label="Your Password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Typography color="error">{errMessage}</Typography>
      <Button
        disabled={email === "" || password === ""}
        className={classes.submitButton}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => handlePasswordLogin()}
      >
        Submit
      </Button>
    </>
  );
};

export const Login = () => {
  const classes = useStyles();
  const [screen, setScreen] = useState(0);

  const screenToShow = () => {
    switch (screen) {
      case 0:
        return <New />;
      case 1:
        return <Old />;
      default:
        return <New />;
    }
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.gridButtons} container>
        <Grid item xs={false} sm={4}></Grid>
        <Grid item xs={6} sm={2}>
          <Button
            className={screen === 0 ? classes.button : ""}
            onClick={() => setScreen(0)}
            fullWidth
          >
            Sign up
          </Button>
          <Divider />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            className={screen === 1 ? classes.button : ""}
            onClick={() => setScreen(1)}
            fullWidth
          >
            Login
          </Button>
          <Divider />
        </Grid>
        <Grid item xs={false} sm={4}></Grid>
      </Grid>

      <Grid className={classes.gridContainer} spacing={2} container>
        <Grid item xs={12} sm={4}></Grid>
        <Grid className={classes.gridMidContainer} item xs={12} sm={4}>
          {screenToShow(screen)}

          <Typography className={classes.sub} variant="body1">
            By signing up you agree to Readtronic's Terms of Service and Privacy
            Policy.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </div>
  );
};
