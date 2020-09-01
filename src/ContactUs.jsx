import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 150,

    [theme.breakpoints.down("sm")]: {
      marginLeft: "6%",
      marginRight: "6%",
    },
  },
  header: {
    fontSize: 46,
    marginTop: 100,
    lineHeight: 1.3,
    textAlign: "center",
  },
  secondHeader: {
    fontSize: 32,
    lineHeight: 2.34,
  },
  multiText: {
    backgroundColor: "#fff",
  },
  submitContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  submitButton: {
    margin: "17px 0",
  },
}));

export const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Typography className={classes.header} variant="h2">
            The Readtronic Story
          </Typography>
          <Typography className={classes.secondHeader} variant="h3">
            What's on your mind?
          </Typography>

          <form className={classes.root} noValidate autoComplete="off">
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
                  variant="filled"
                  rows={8}
                  placeholder="Please enter your message here"
                  label="How can we help? What can we do better?"
                />
              </Grid>
            </Grid>

            <div className={classes.submitContainer}>
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </div>
  );
};