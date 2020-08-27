import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: "1",
  },
}));

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
    </>
  );
};
