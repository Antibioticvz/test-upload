import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import MiButton from "./components/MiButton";

import AScreen from "./images/1_screen.png";
import BScreen from "./images/2_screen.png";
import CScreen from "./images/3_screen.png";
import DScreen from "./images/4_screen.png";
import EScreen from "./images/5_screen.png";
import FScreen from "./images/6_screen.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    fontFamily: "Lato",
    fontSize: 27,
    fontWeight: 800,
    lineHeight: 1.93,
    letterSpacing: "-1.08px",
    textAlign: "center",
    color: "#4279f1",
  },
  subHeader: {
    fontFamily: "Lato",
    fontSize: 18,
    lineHeight: 1.11,
    letterSpacing: "-0.45px",
    textAlign: "center",
    color: "#292929",
    marginBottom: 33,
  },
  text: {
    fontFamily: "Lato",
    fontSize: 18,
    lineHeight: 1.11,
    letterSpacing: "-0.45px",
    textAlign: "left",
    color: "#292929",
    marginBottom: 33,
    marginTop: 16,
  },
  button: {},
  gridContainer: {
    paddingLeft: "6%",
    paddingRight: "6%",
    marginBottom: 150,
    marginTop: 40,
  },
  img: {
    marginBottom: 33,
    width: "100%",
  },
}));

export const Sharing = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.gridContainer} container>
      <Grid item xs={false} sm={4} />
      <Grid item xs={12} sm={4}>
        <Typography className={classes.header} variant="h2">
          Activate Readtronic Sharing
        </Typography>
        <Typography className={classes.subHeader} variant="body1">
          Just a few simple steps to enable quick sharing to the Readtronic app
        </Typography>
        <Divider />
        <Typography className={classes.text} variant="body1">
          1. Find article or blog you want to listen to in Safari.
        </Typography>
        <Typography className={classes.text} variant="body1">
          2. Click the Share icon on the bottom of your screen.
        </Typography>
        <img className={classes.img} src={AScreen} />
        <Typography className={classes.text} variant="body1">
          3. Swipe left on app icons and then click More.
        </Typography>
        <img className={classes.img} src={BScreen} />
        <Typography className={classes.text} variant="body1">
          4. Click Edit.
        </Typography>
        <img className={classes.img} src={CScreen} />
        <Typography className={classes.text} variant="body1">
          5. Click the + to left of Readtronic.
        </Typography>
        <img className={classes.img} src={DScreen} />
        <Typography className={classes.text} variant="body1">
          6. Click Done.
        </Typography>
        <img className={classes.img} src={EScreen} />
        <Typography className={classes.text} variant="body1">
          7. Click the Readtronic icon to add the content to your Readtronic
          app.
        </Typography>
        <img className={classes.img} src={FScreen} />
        <Typography className={classes.text} variant="body1">
          8. That's it! Repeat steps 2 & 7 to add content to your Readtronic
          app.
        </Typography>

        <Button
          className={classes.button}
          fullWidth
          variant="contained"
          color="primary"
          component={MiButton}
          href="/"
        >
          Return to Readtronic
        </Button>
      </Grid>
      <Grid item xs={false} sm={4} />
    </Grid>
  );
};
