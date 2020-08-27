import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Back from "../images/back.svg";
import Stay from "../images/Stay.svg";
import Man from "../images/Man.svg";
import Istore from "../images/Istore.svg";
import Gstore from "../images/Gstore.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 1035,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Back})`,
    backgroundSize: "contain",
  },
  textContainer: {
    marginTop: "20%",
    marginLeft: "6%",
  },
  firstHeader: {
    marginBottom: "2%",
  },
  secondHeader: {
    lineHeight: "1.2",
    marginBottom: "4%",
  },
  buttonsRow: {
    display: "flex",
    marginTop: 10,
    marginLeft: -14,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: 0,
    },
  },
  storeButtons: {
    "&:hover": {
      borderRadius: 16,
    },
  },
  body: {
    width: "70%",
  },
  boy: {
    height: "40%",
    marginTop: 24,
    marginLeft: 16,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const StayInformed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <div className={classes.textContainer}>
            <Typography className={classes.firstHeader} variant="h1">
              Stay Informed
            </Typography>
            <Typography className={classes.secondHeader} variant="h3">
              Listen Today Instead of Reading Tomorrow
            </Typography>
            <Typography className={classes.body} variant="body1">
              Easy ‘two click’ upload text-to-speech app that allows active
              people to listen and learn on the go.
            </Typography>

            <div className={classes.buttonsRow}>
              <IconButton className={classes.storeButtons} aria-label="Store">
                <img src={Istore} alt="Istore" />
              </IconButton>
              <IconButton className={classes.storeButtons} aria-label="Store">
                <img src={Gstore} alt="Istore" />
              </IconButton>
            </div>
          </div>

          <img className={classes.boy} src={Man} alt="man" />
        </Grid>
        <Grid item xs={12} sm={7}>
          <img src={Stay} alt="Stay" width="100%" />
        </Grid>
      </Grid>
    </div>
  );
};
