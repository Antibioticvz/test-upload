import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Logo from "../images/logo.svg";
import Readtronic from "../images/readtronic.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 20,
    backgroundColor: "#f8fffa",
    marginBottom: 7,
  },
  divider: {
    margin: "0 34px 10px 34px",
  },
  img: {
    margin: 2,
    height: 46,
  },
  logo: {
    display: "flex",
  },
  year: {
    color: "#60656f",
    marginTop: 7,
    marginRight: 32,
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.root}>
        <div className={classes.logo}>
          <img className={classes.img} src={Logo} alt="Logo" />
          <img className={classes.img} src={Readtronic} alt="Readtronic" />
        </div>
        <Typography className={classes.year} variant="h4">
          © 2020
        </Typography>
      </div>
    </>
  );
};
