import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import MiButton from "./MiButton";

import Logo from "../images/logo.svg";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  root: {
    boxShadow: "none",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const HeaderFooterLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div
    //  className={classes.grow}
    >
      <AppBar className={classes.root} position="static" color="default">
        <Toolbar className={classes.flex}>
          <img src={Logo} alt="Logo" />

          <p>Home</p>
          <p>Pricing</p>
          <p>Our Story</p>
          <p>Contact Us</p>
          <Button
            component={MiButton}
            href="/upload"
            variant="contained"
            color="primary"
          >
            login
          </Button>
        </Toolbar>
      </AppBar>

      {children}

      <h1>Footer</h1>
    </div>
  );
};
