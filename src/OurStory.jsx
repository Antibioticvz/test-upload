import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Kevin from "./images/Kevin.png";
import Boys from "./images/boys.jpg";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    paddingBottom: 122,
  },
  gridContainer: {},
  avatar: {
    margin: "118px auto 0px",

    [theme.breakpoints.down("sm")]: {
      margin: "46px auto 0px",
    },
  },
  name: {
    fontSize: 20,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 3,
    letterSpacing: "normal",
    textAlign: "center",
  },
  date: {
    fontSize: 18,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: "normal",
    color: "#b3b8b3",
    textAlign: "center",
    marginBottom: 94,

    [theme.breakpoints.down("sm")]: {
      marginBottom: 24,
    },
  },
  header: {
    fontSize: 46,
    margin: "24px 7px 30px 7px",
  },
  text: {
    margin: "10px 7px 15px 7px",
    fontFamily: "FiraSans",
    fontSize: 24,
    lineHeight: 1.7,
    letterSpacing: "normal",
    color: "#60656f",
  },
}));

export const OurStory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid className={classes.avatarContainer} item xs={12} sm={2}>
          <img className={classes.avatar} src={Kevin} width="100px" />
          <Typography className={classes.name} variant="body1">
            Kevin Gaffney
          </Typography>
          <Typography className={classes.date} variant="body1">
            August 21, 2020
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className={classes.header} variant="h2">
            The Readtronic Story
          </Typography>

          <img src={Boys} width="100%" />
          <Typography className={classes.text} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography className={classes.text} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography className={classes.text} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography className={classes.text} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </div>
  );
};
