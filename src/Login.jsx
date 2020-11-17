import React, { useState, useEffect, useContext, useCallback } from "react";
import { navigate } from "hookrouter";
import * as EmailValidator from "email-validator";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FirebaseContext from "./Firebase";
import Context from "./ContextAuth";
import { QrDialog } from "./components/QrDialog";

import BGMain from "./images/BGMain.svg";
import BGMobile from "./images/BGMobile.svg";
import EmailLink from "./images/emailLink.svg";
import Istore from "./images/Istore.svg";

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
    marginTop: 8,
    background: "#fff",

    [theme.breakpoints.down("sm")]: {
      background: "none",
    },
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
  headerImgContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  headerImg: {
    margin: 'auto',
    marginTop: '10%',
    paddingLeft: 33,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 12,
    color: '#292D34',
    fontWeight: "bold",
    fontFamily: "Fira Sans",
  },
  mainText: {
    textAlign: "center",
    fontSize: 16,
    margin: '3px 0 3px',
    color: '#707070',
    fontFamily: "Fira Sans",
  },
  ruleText: {
    fontSize: 16,
    margin: '3px 0 3px',
    color: '#292D34',
    fontFamily: "Fira Sans",
  },
  boldBox: {
    display: 'inline-flex',
  },
  buttonContainer: {
    display: 'flex',
  },
  storeButtons: {
    margin: 'auto',
  }
}));

const Old = () => {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);

  const { setAuth } = useContext(Context);

  const [errMessage, setErrMessage] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");

  const handlePasswordSignup = () =>
    firebase
      .doSendSignInLinkToEmail(email)
      .then(() => {
        firebase
          .doSendSignInLinkToEmail(email).then(()=>localStorage.setItem(
            process.env.REACT_APP_LOCAL_STORAGE,
            email
          ))
        setSubmit(true)
      })
      .catch(({ message }) => setErrMessage(message))

  const handleErrorMsg = useCallback(message => {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    firebase.doSignOut();
    setErrMessage(message);
  },[firebase]);

  useEffect(()=>{
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
      navigate("/upload");
    })
    .catch((error) => handleErrorMsg(error.message));
  }
  },[firebase, handleErrorMsg, setAuth]);

  return (
    <>
      <div className={classes.headerImgContainer}>
        <img 
          className={classes.headerImg}
          src={EmailLink} 
          alt="" 
          />
      </div>

      <Typography className={classes.headerText} variant="h4">
        {submit ? 'Check Your Email' : 'Request Magic Link Email'}
      </Typography>

      <Typography className={classes.mainText} variant="body1">
        {submit && 'We sent you an email with to ' }
        {submit && <Box className={classes.boldBox} fontWeight="fontWeightBold">{email}</Box> }
        {!submit && 'Please enter your registered email below & click the link in your email to login'}
      </Typography>
      {submit && <br />}
      {submit && <Typography className={classes.mainText} variant="body1">
        Just click the "Sign in to Readtronic" link and you'll be magically logged in! 
      </Typography>}

      {!submit && <TextField
        value={email}
        className={classes.field}
        fullWidth
        label="Your Email Address"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />}

      <Typography color="error">{errMessage}</Typography>
      {!submit && <Button
        disabled={
          email === "" ||
          !EmailValidator.validate(email)
        }
        className={classes.submitButton}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => handlePasswordSignup()}
      >
        Send Magic Link
      </Button>}
    </>
  );
};

const New = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <QrDialog open={open} handleClose={() => setOpen(false)} />

      <br />
      <Typography className={classes.headerText} variant="h4">
      Create your account in <br/> the Readtronic app
      </Typography>
      <br />

      <Typography className={classes.ruleText} variant="body1">
        1. Install & open the Readtronic app
      </Typography>

      <Typography className={classes.ruleText} variant="body1">
        2. Click "Already have an account"
      </Typography>

      <Typography className={classes.ruleText} variant="body1">
        3. Enter your email & open magic link
      </Typography>

      <Typography className={classes.ruleText} variant="body1">
        4. Perfect! Now you can login using this email.
      </Typography>

      <br />
      <div className={classes.buttonContainer}>
        <IconButton
          className={classes.storeButtons}
          onClick={() =>
            matches
            ? setOpen(true)
            : window.location.replace(
              "https://www.apple.com/ios/app-store/"
              )
            }
            aria-label="Store"
            >
          <img src={Istore} alt="Istore" />
        </IconButton>
      </div>
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
