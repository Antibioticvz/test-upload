import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
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

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridButtons} container>
        <Grid item xs={false} sm={4}></Grid>
        <Grid item xs={6} sm={2}>
          <Button className={classes.button} fullWidth>
            Sign up
          </Button>
          <Divider />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button className={classes.button} fullWidth>
            Login
          </Button>
          <Divider />
        </Grid>
        <Grid item xs={false} sm={4}></Grid>
      </Grid>

      <Grid className={classes.gridContainer} spacing={2} container>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className={classes.field}
            fullWidth
            label="Your Email Address"
          />
          <TextField
            className={classes.field}
            fullWidth
            label="Your Password"
          />
          <Button
            className={classes.submitButton}
            fullWidth
            variant="contained"
            color="primary"
          >
            Create Account
          </Button>

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
