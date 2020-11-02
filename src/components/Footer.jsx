import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ReadtronicFooter from "../images/readtronicFooter.svg";
import Instagram from "../images/Instagram.svg";
import LinkedIn from "../images/LinkedIn.svg";
import TikTok from "../images/TikTok.svg";
import Twitter from "../images/Twitter.svg";
import BlueDot from "../images/blueDot.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 7,
    backgroundColor: "#f8fffa",

    [theme.breakpoints.down("xs")]: {
      margin: "0 32px",
    },
  },
  divider: {
    margin: "0 34px 10px 34px",
  },
  text: {
    color: "#60656F",
    fontFamily: "Fira Sans",
    fontSize: 15,
    fontWeight: "bold",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  linkBox: {
    display: "flex",
    margin: "auto 0",
  },
  blueDot: {
    marginRight: 10,
  },
  nextBlueDot: {
    marginRight: 10,
    marginLeft: 10,
  },
  leftContainer: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0",

    [theme.breakpoints.down("xs")]: {
      margin: "18px 0",
    },
  },
  centerContainer: {
    margin: "10px 0",

    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
  },
  rightContainer: {
    display: "flex",
    margin: "10px 0",
    justifyContent: "flex-end",
    marginRight: 32,

    [theme.breakpoints.down("xs")]: {
      margin: "14px 0 5px",
      justifyContent: "flex-start",
      marginRight: 0,
    },
  },
  mobileReverseContainer: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  readtronicFooter: {
    marginTop: 6,
    marginLeft: 50,

    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.root}>
        <Container maxWidth={false}>
          <Grid className={classes.gridContainer} spacing={0} container>
            <Grid className={classes.leftContainer} item xs={12} sm={3}>
              <img className={classes.icon} src={Instagram} alt="" />
              <img className={classes.icon} src={LinkedIn} alt="" />
              <img className={classes.icon} src={TikTok} alt="" />
              <img className={classes.icon} src={Twitter} alt="" />
            </Grid>

            <Grid
              className={classes.mobileReverseContainer}
              item
              xs={12}
              sm={9}
            >
              <Grid className={classes.centerContainer} item xs={12} sm={8}>
                <img
                  className={classes.readtronicFooter}
                  src={ReadtronicFooter}
                  alt=""
                />
              </Grid>

              <Grid className={classes.rightContainer} item xs={12} sm={4}>
                <div className={classes.linkBox}>
                  <img className={classes.blueDot} src={BlueDot} alt="" />
                  <Typography className={classes.text} variant="body1">
                    Privacy
                  </Typography>
                </div>
                <div className={classes.linkBox}>
                  <img className={classes.nextBlueDot} src={BlueDot} alt="" />
                  <Typography className={classes.text} variant="body1">
                    Terms & Conditions
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
