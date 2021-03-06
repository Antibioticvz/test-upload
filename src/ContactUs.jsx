import React, { useState } from "react";
import Recaptcha from "react-recaptcha";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import BGMain from "./images/BGMain.svg";
import BGMobile from "./images/BGMobile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BGMain})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    paddingBottom: 150,

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${BGMobile})`,
    },
  },
  form: {
    backgroundColor: "#fff",
    // minWidth: "565px",
  },
  header: {
    fontSize: 37,
    marginTop: 14,
    lineHeight: 1.3,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      textAlign: "center",
      marginBottom: 18,
    },
  },
  secondHeader: {
    fontSize: 23,
    lineHeight: 2,

    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      marginTop: 10,
    },
  },
  midleContainer: {
    padding: "0 5%",
    backgroundColor: "#fff",

    [theme.breakpoints.down("sm")]: {
      padding: "2px",
    },
  },
  leftContainer: {
    [theme.breakpoints.up("sm")]: {
      "& .MuiGrid-grid-sm-auto": {
        flexGrow: 1,
      },
    },
  },
  multiText: {
    // backgroundColor: "#f6f7fe",
    borderRadius: 20,

    "& .MuiInputLabel-shrink": {
      // paddingLeft: 4,
    },
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
  shadow: {
    borderRadius: 20,
    boxShadow: "0 20px 80px 0 rgba(117, 126, 117, 0.11)",
  },
  emptyContainer: {
    paddingTop: 3,
    margin: 29,
    paddingBottom: 25,
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
          <Grid className={classes.leftContainer} item xs={12} sm={3} />
          <Grid className={classes.midleContainer} item xs={12} sm={6}>
            <div className={classes.shadow}>
              <div className={classes.emptyContainer}>
                <Typography className={classes.header} variant="h2">
                  We'd love to hear from you
                </Typography>

                <div
                  style={{
                    width: "100%",
                    height: 0,
                    border: "solid 1px #e4e5e4",
                  }}
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
                        placeholder="Please enter your message here"
                        label="How can we help? Can we do better?"
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
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} />
        </Grid>
      </Container>
    </div>
  );
};
