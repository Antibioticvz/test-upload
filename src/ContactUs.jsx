import React, { useState } from "react";
import Recaptcha from "react-recaptcha";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import Back from "./images/back.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Back})`,
    backgroundSize: "contain",
    marginBottom: 150,

    [theme.breakpoints.down("sm")]: {
      marginLeft: "6%",
      marginRight: "6%",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "6%",
      marginRight: "6%",
    },
  },
  form: {
    backgroundColor: "#fff",
    // minWidth: "565px",
  },
  header: {
    fontSize: 37,
    marginTop: 100,
    lineHeight: 1.3,
    textAlign: "center",
  },
  secondHeader: {
    fontSize: 23,
    lineHeight: 2,
  },
  midleContainer: {
    borderRadius: 20,
    boxShadow: "0 20px 80px 0 rgba(117, 126, 117, 0.11)",
    backgroundColor: "#fff",
  },
  leftContainer: {
    [theme.breakpoints.up("sm")]: {
      "& .MuiGrid-grid-sm-auto": {
        flexGrow: 1,
      },
    },
  },
  multiText: {
    backgroundColor: "#f6f7fe",
    borderRadius: 20,

    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff",
    },
  },
  submitContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  submitButton: {
    margin: "auto 0",
  },
}));

export const ContactUs = () => {
  const classes = useStyles();
  const [verify, setVerify] = useState(false);

  const verifyCallback = () => setVerify(true);

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Grid className={classes.gridContainer} spacing={0} container>
          <Grid className={classes.leftContainer} item xs={12} sm={3}></Grid>
          <Grid className={classes.midleContainer} item xs={12} sm={6}>
            <Typography className={classes.header} variant="h2">
              We'd love to hear from you
            </Typography>

            <div
              style={{ width: "100%", height: 0, border: "solid 1px #e4e5e4" }}
            />

            <Typography className={classes.secondHeader} variant="h3">
              What's on your mind?
            </Typography>

            <form className={classes.form} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    className={classes.multiText}
                    fullWidth
                    multiline
                    rows={8}
                    placeholder=" Please enter your message here"
                    label=" How can we help? What can we do better?"
                  />
                </Grid>
              </Grid>

              <div className={classes.submitContainer}>
                <Recaptcha
                  sitekey="6LeE68wZAAAAAI6Ugiy3UTnEZnm4Vnu_n9XQa_Oz"
                  render="explicit"
                  verifyCallback={verifyCallback}
                />
                <Button
                  disabled={!verify}
                  className={classes.submitButton}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
};
