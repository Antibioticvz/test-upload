import React, { useRef, useLayoutEffect } from "react";
import { usePath } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import { StayInformed } from "./components/StayInformed";
import { Advantage } from "./components/Advantage";
import { Pay } from "./components/Pay";
import { FAQ } from "./components/Faq";

import Istore from "./images/Istore.svg";

const useStyles = makeStyles((theme) => ({
  buttonsRow: {
    display: "flex",
    marginTop: 10,
    marginLeft: -14,

    marginBottom: 60,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: 0,
    },
  },
  storeButtons: {
    "&:hover": {
      borderRadius: 16,
      backgroundColor: "rgba(0, 0, 0, 0.07)",
    },
  },
  header: {
    color: "#292D34",
    fontWeight: "bold",
    fontFamily: "Fira Sans",
    fontSize: 28,
    textAlign: "center",
  },
}));

export const HomePage = () => {
  const path = usePath();
  const myRef = useRef(null);
  const classes = useStyles();

  useLayoutEffect(() => {
    if (path === "/home/price") {
      window.scrollTo({
        behavior: "smooth",
        top: myRef.current.offsetTop,
      });
    }
  }, [path]);

  return (
    <>
      <StayInformed />
      <Advantage />
      <div ref={myRef}> </div>
      <Pay />
      <FAQ />
      <Hidden smUp>
        <Typography className={classes.header} variant="body1">
          Let's Get Started!
        </Typography>

        <div className={classes.buttonsRow}>
          <IconButton
            className={classes.storeButtons}
            onClick={() =>
              window.location.replace("https://www.apple.com/ios/app-store/")
            }
            aria-label="Store"
          >
            <img src={Istore} alt="Istore" />
          </IconButton>
        </div>
      </Hidden>
    </>
  );
};
