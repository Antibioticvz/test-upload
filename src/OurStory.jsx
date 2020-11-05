import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import Kevin from "./images/Kevin.png";
import Boys from "./images/boys.jpg";

import BGMain from "./images/BGMain.svg";
import BGMobile from "./images/BGMobile.svg";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 122,
    backgroundImage: `url(${BGMain})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${BGMobile})`,
    },
  },
  gridContainer: {},
  textContainer: {
    //backgroundColor: "#fff",
  },
  avatar: {
    margin: "118px auto 0px",
  },
  name: {
    fontFamily: "Fira Sans",
    fontSize: 17,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 2,
    letterSpacing: "normal",
    textAlign: "center",
  },
  date: {
    fontFamily: "Fira Sans",
    fontSize: 15,
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
    fontSize: 37,
    margin: "24px 7px 30px 7px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      textAlign: "center",
      margin: "24px 7px 13px 7px",
    },
  },
  text: {
    margin: "10px 7px 15px 7px",
    fontFamily: "Fira Sans",
    fontSize: 17,
    lineHeight: 1.7,
    letterSpacing: "normal",
    color: "#60656f",
  },
  mobileAvatarContainer: {
    display: "flex",
  },
  mobileNameContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "auto 17px",
  },
  mobileAvatar: {
    marginLeft: 5,
  },
  mobileName: {
    fontFamily: "Fira Sans",
    fontSize: 16,
    lineHeight: 2,
    color: "#000",
  },
  mobileDate: {
    fontFamily: "Fira Sans",
    fontSize: 16,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: "normal",
    color: "#b3b8b3",
  },
}));

export const OurStory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid className={classes.avatarContainer} item xs={12} sm={2}>
          <Hidden xsDown>
            <img className={classes.avatar} src={Kevin} width="80px" alt="" />
            <Typography className={classes.name} variant="body1">
              Kevin Gaffney
            </Typography>
            <Typography className={classes.date} variant="body1">
              August 21, 2020
            </Typography>
          </Hidden>
        </Grid>
        <Grid className={classes.textContainer} item xs={12} sm={6}>
          <Typography className={classes.header} variant="h2">
            Our Story
          </Typography>

          <img src={Boys} width="100%" alt="" />

          <Hidden smUp>
            <div className={classes.mobileAvatarContainer}>
              <img
                className={classes.mobileAvatar}
                src={Kevin}
                width="80px"
                alt=""
              />
              <div className={classes.mobileNameContainer}>
                <Typography className={classes.mobileName} variant="body1">
                  Kevin Gaffney
                </Typography>
                <Typography className={classes.mobileDate} variant="body1">
                  August 21, 2020
                </Typography>
              </div>
            </div>
          </Hidden>

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
        <Grid item xs={12} sm={1}></Grid>
      </Grid>
    </div>
  );
};
