import React, { useState, useEffect, useContext, useCallback } from "react";
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

import BGMain from "./images/BGMain.svg";
import BGMobile from "./images/BGMobile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${BGMain})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${BGMobile})`,
    },
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

const Old = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);

  const { setAuth } = useContext(Context);

  const [errMessage, setErrMessage] = useState(null);
  const [email, setEmail] = useState("");

  const handlPasswordSignup = () =>
    firebase
      .doSendSignInLinkToEmail(email)
      .then(() => firebase
        .doSendSignInLinkToEmail(email).then(()=>localStorage.setItem(
          process.env.REACT_APP_LOCAL_STORAGE,
          email
        ))
        .catch(({ message }) => setErrMessage(message)))


        const handleErrorMsg = useCallback(message => {
          localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
          firebase.doSignOut();
          setErrMessage(message);
        },[firebase]);

useEffect(()=>{
  console.log('window.location.href')
  console.log(window.location.href)
  // Confirm the link is a sign-in with email link.
if (firebase.isSignInWithEmailLink()) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE);
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  firebase.doSignInWithEmailLink(email)
    .then((result) => {
      // Clear email from storage.
      localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
      setAuth(true);
    })
    .catch((error) => {handleErrorMsg(error.message)});
}
},[firebase, handleErrorMsg, setAuth])


  return (
    <>
      <TextField
        value={email}
        className={classes.field}
        fullWidth
        label="Your Email Address"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />

      <Typography color="error">{errMessage}</Typography>
      <Button
        disabled={
          email === "" ||
          !EmailValidator.validate(email)
        }
        className={classes.submitButton}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => handlPasswordSignup()}
      >
        Send Magic Link
      </Button>
    </>
  );
};

const New = () => {
  const classes = useStyles();


  return (
    <>
      
      
      <Button
        className={classes.submitButton}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => {}}
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
