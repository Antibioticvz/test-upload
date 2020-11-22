import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Take from "../images/take.svg";
import Simple from "../images/simple.svg";
import Listen from "../images/listen.svg";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    fontSize: 37,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: "1",

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  secondHeader: {
    fontSize: 23,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: "1",

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  cardsContainer: {
    paddingBottom: 20,
    paddingLeft: 20,
    marginBottom: "20%",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  card: {
    marginLeft: 7,
    marginRight: 7,
    display: "flex",
    flexDirection: "column",
  },
  img: {
    marginBottom: 16,
  },
  cardText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 12,
    padding: "0 15%",
  },
  cardHeader: {
    fontSize: 23,
    padding: "0 15%",
    color: "#292d34",
    lineHeight: "1.2",
    letterSpacing: "-1px",
    textAlign: "center",
  },
}));

const Card = ({ headerFirst, headerSecond, icon, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      {icon}
      <Typography className={classes.cardHeader} variant="h4">
        {headerFirst}
        <br />
        {headerSecond}
      </Typography>
      <Typography className={classes.cardText} variant="body1">
        {text}
      </Typography>
    </div>
  );
};

export const Advantage = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.header} variant="h2">
        The Readtronic Advantage
      </Typography>
      <Typography className={classes.secondHeader} variant="h3">
        Fastest Way to Get Information Off Your Screen and Into Your Head
      </Typography>
      <br />
      <br />
      <br />

      <Grid className={classes.cardsContainer} container>
        <Grid item xs={12} sm={4}>
          <Card
            icon={<img className={classes.img} src={Take} alt="" />}
            headerFirst="Take Your Reading"
            headerSecond="Anywhere"
            text="Use Readtronic to listen when reading isn't possible: while you are cleaning the house, walking the dog, driving to work, or going for a run"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            icon={<img className={classes.img} src={Simple} alt="" />}
            headerFirst="Simple Upload From"
            headerSecond="Phone or Computer"
            text="Share from phone, upload via our website, 
            extract with our Chrome extension to quickly add content to our app for listening on the go"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            icon={<img className={classes.img} src={Listen} alt="" />}
            headerFirst="Listen to"
            headerSecond="Any Text"
            text="Any document or text; we got you.
            Websites and blogs? Of course! 
            PDFs? No problem. Docs? For sure."
          />
        </Grid>
      </Grid>
    </>
  );
};
