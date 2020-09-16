import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 32,
    backgroundColor: "#f8fffa",
    marginBottom: 7,
  },
  divider: {
    margin: "0 34px 10px 34px",
  },
  text: {
    color: "#60656f",
    marginTop: 7,
    marginBottom: 7,
    marginRight: 32,
    fontWeight: "bold",
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.root}>
        <Typography className={classes.text} variant="body1">
          © 2020 readtronic.com
        </Typography>
      </div>
    </>
  );
};
