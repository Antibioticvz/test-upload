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
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: "1",
  },
  cardsContainer: {
    paddingBottom: 20,
    paddingLeft: 20,
    marginBottom: "20%",
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
    textAlign: "center",
    marginTop: 12,
    padding: "0 15%",
  },
  cardHeader: {
    padding: "0 15%",
    fontSize: "25px",
    color: "#292d34",
    lineHeight: "1.2",
    letterSpacing: "-1px",
    textAlign: "center",
  },
}));

const Card = ({ header, icon, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      {icon}
      <Typography className={classes.cardHeader} variant="h4">
        {header}
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
      <Typography className={classes.header} variant="h3">
        Fastest Way to Get Information off Your Screen and Into Your Head
      </Typography>

      <Grid className={classes.cardsContainer} container>
        <Grid item xs={12} sm={4}>
          <Card
            icon={<img className={classes.img} src={Take} />}
            header="Take Your Reading Anywhere"
            text="Use Readtronic to listen when reading isn't possible: while you are cleaning the house, walking the dog, driving to work, or going for a run"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            icon={<img className={classes.img} src={Simple} />}
            header="Simple Upload From Phone or Computer"
            text="Share from phone, upload via our website, 
            extract with our Chrome extension to quickly add content to our app for listening on the go"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            icon={<img className={classes.img} src={Listen} />}
            header="Listen to Any Text"
            text="Any document or text; we got you.
            Websites and blogs? Of course! 
            PDFs? No problem. Docs? For sure."
          />
        </Grid>
      </Grid>
    </>
  );
};