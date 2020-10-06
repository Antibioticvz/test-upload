import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Code from "../images/code.jpg";

const useStyles = makeStyles((theme) => ({
  dialog: {
    maxWidth: 600,
  },
  borderContainer: {
    padding: 16,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    margin: "14px 0",
  },
  buttonContainer: { width: "45%" },
  buttonLeft: {
    padding: 4,
    height: 66,
    backgroundColor: "rgb(66, 121, 241, 0.1)",
    textTransform: "none",

    "& .MuiButton-label": {
      whiteSpace: "unset",
    },
  },
  buttonRight: {
    padding: 5,
    height: 66,
  },
  title: {
    fontFamily: "Fira Sans",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 2,
    letterSpacing: "-1.04px",
    textAlign: "center",
    color: "#292d34",
  },
  text: {
    fontFamily: "Fira Sans",
    fontSize: 20,
    margin: "28px 0",
    textAlign: "left",
    color: "#292d34",
    lineHeight: "normal",
  },
  img: {
    width: "100%",
  },
}));

export const QrDialog = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      style={{ width: 600 }}
      open={open}
      onClose={handleClose}
    >
      <div className={classes.borderContainer}>
        <Typography className={classes.title} variant="h2">
          Scan Code Below
        </Typography>

        <Grid className={classes.gridContainer} container>
          <Grid item xs={5} sm={5}>
            <img className={classes.img} src={Code} alt="code" />
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography className={classes.text} variant="body1">
              1. Open your iPhone Camera
            </Typography>
            <Typography className={classes.text} variant="body1">
              2. Line up QR code in viewfinder
            </Typography>
            <Typography className={classes.text} variant="body1">
              3. Tap the notification to Readtronic on the App Store
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.buttonsContainer}>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.buttonLeft}
              onClick={handleClose}
              fullWidth
              color="primary"
            >
              This is weird. Just take me to the app store.
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.buttonRight}
              onClick={handleClose}
              fullWidth
              variant="contained"
              color="primary"
            >
              Got it!
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
