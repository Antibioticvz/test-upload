import React, { useState, useEffect, useContext } from "react";
import { navigate } from "hookrouter";
import * as EmailValidator from "email-validator";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import FirebaseContext from "./Firebase";
import Context from "./ContextAuth";

import Back from "./images/back.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Back})`,
    backgroundSize: "cover",
    marginBottom: 230,
  },
  gridButtons: {
    display: "flex",
    marginTop: 60,
  },
  gridContainer: {},
  gridMidContainer: {
    background: "#fff",
    marginTop: 8,
  },
  midContainer: {
    borderRadius: 20,
    boxShadow: "0 20px 80px 0 rgba(117, 126, 117, 0.11)",
    hight: 988,
  },
  screen: {
    padding: "0px 40px 12px",
  },
  field: {
    marginTop: 16,
  },
  submitButton: {
    marginTop: 18,
  },
  sub: {
    fontSize: 14,
    margin: "22px 0 0",
    textAlign: "center",
  },
  buttonLeft: {
    borderRadius: "20px 0 0 0",
    backgroundColor: "rgba(96, 101, 111, 0.06)",
  },
  buttonActiveLeft: {
    borderRadius: "20px 0 0 0",
    fontWeight: "bold",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  buttonRight: {
    borderRadius: "0 20px 0 0",
    backgroundColor: "rgba(96, 101, 111, 0.06)",
  },
  buttonActiveRight: {
    borderRadius: "0 20px 0 0",
    fontWeight: "bold",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));

const New = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);
  const { setAuth } = useContext(Context);

  const [errMessage, setErrMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlPasswordSignup = () =>
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setAuth(true);
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
  const { setAuth } = useContext(Context);

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
        setAuth(true);
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
      <div style={{ height: "64px" }} />
    </>
  );
};

export const Login = ({ tab }) => {
  const classes = useStyles();
  const [screen, setScreen] = useState(Number(tab));

  useEffect(() => setScreen(Number(tab)), [tab]);

  const screenToShow = () => {
    switch (screen) {
      case 0:
        return <New />;
      case 1:
        return <Old />;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Grid className={classes.gridContainer} spacing={2} container>
          <Grid item xs={12} sm={4}></Grid>
          <Grid className={classes.gridMidContainer} item xs={12} sm={4}>
            <div className={classes.midContainer}>
              <div>
                <div className={classes.gridButtons}>
                  <Button
                    className={
                      screen === 1
                        ? classes.buttonLeft
                        : classes.buttonActiveLeft
                    }
                    onClick={() => setScreen(0)}
                    fullWidth
                  >
                    Sign up
                  </Button>

                  <Button
                    className={
                      screen === 0
                        ? classes.buttonRight
                        : classes.buttonActiveRight
                    }
                    onClick={() => setScreen(1)}
                    fullWidth
                  >
                    Login
                  </Button>
                </div>
              </div>

              <div className={classes.screen}>
                {screenToShow(screen)}

                <Typography className={classes.sub} variant="body1">
                  By signing up you agree to Readtronic's Terms of Service and
                  Privacy Policy.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
};
