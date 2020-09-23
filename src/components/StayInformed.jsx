import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { QrDialog } from "./QrDialog";

import BG2 from "../images/BG2.png";
import Man from "../images/Man.svg";
import Istore from "../images/Istore.svg";
import Gstore from "../images/Gstore.svg";
import Blob from "../images/Blob.png";

import "../sliderStyle.scss";

class Slider {
  constructor(_element) {
    this.slider = _element;
    this.items = [
      this.slider.querySelector(".item-1"),
      this.slider.querySelector(".item-2"),
      this.slider.querySelector(".item-3"),
    ];
    this.headers = [
      this.slider.querySelector(".header-1"),
      this.slider.querySelector(".header-2"),
      this.slider.querySelector(".header-3"),
    ];

    this.listeners();
  }

  item_3Click = () => {
    this.items[2].removeEventListener("click", this.item_1Click);
    this.items[0].removeEventListener("click", this.item_3Click);
    this.previous();
  };

  item_1Click = () => {
    this.items[2].removeEventListener("click", this.item_1Click);
    this.items[0].removeEventListener("click", this.item_3Click);
    this.next();
  };

  listeners = () => {
    this.items[2].addEventListener("click", this.item_3Click);
    this.items[0].addEventListener("click", this.item_1Click);
  };

  reclass = () => {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].classList.remove("item-1", "item-2", "item-3");
      this.items[i].classList.add("item-" + String(i + 1));
    }

    for (let j = 0; j < this.headers.length; j++) {
      this.headers[j].classList.remove("header-1", "header-2", "header-3");
      this.headers[j].classList.add("header-" + String(j + 1));
    }
  };

  next = () => {
    this.items.push(this.items[0]);
    this.headers.push(this.headers[0]);
    this.items.shift();
    this.headers.shift();

    this.reclass();
    this.listeners();
  };

  previous = () => {
    this.items.unshift(this.items[2]);
    this.headers.unshift(this.headers[2]);
    this.items.pop();
    this.headers.pop();

    this.reclass();
    this.listeners();
  };
}

const useStylesComponent = makeStyles((theme) => ({
  header: {
    fontSize: 66,

    [theme.breakpoints.down("md")]: {
      fontSize: 60,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  sliderBg: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundPositionY: 85,
    backgroundImage: `url(${Blob})`,
    backgroundSize: "82%",

    [theme.breakpoints.down("md")]: {
      backgroundPositionY: 88,
      backgroundSize: "88%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPositionY: 50,
      backgroundSize: "55%",
    },
  },
}));

const SliderComponent = () => {
  const classes = useStylesComponent();

  // keep track of the DOM element to shave
  let elemRef = useRef();

  // Run an effect every time maxHeight changes
  useEffect(() => {
    const slider = new Slider(elemRef.current);

    setInterval(() => {
      slider.next();
    }, 4000);
  }, []);

  return (
    <>
      <div
        id="slider"
        ref={elemRef}
        className={"slider" + " " + classes.sliderBg}
      >
        <div className={classes.sliderBg}>
          <div className="item item-1">
            <Typography
              className={"header header-1" + " " + classes.header}
              variant="h1"
            >
              LISTEN
            </Typography>
            <img
              src="https://readtronic-dev-static-assets.s3-us-west-2.amazonaws.com/Images/Listen__3+Articles%403x.png"
              alt="1"
            />
          </div>
          <div className="item item-2">
            <Typography
              className={"header header-2" + " " + classes.header}
              variant="h1"
            >
              FIND
            </Typography>
            <img
              src="https://readtronic-dev-static-assets.s3-us-west-2.amazonaws.com/Images/Find___No+Label%403x.png"
              alt="2"
            />
          </div>
          <div className="item item-3">
            <Typography
              className={"header header-3" + " " + classes.header}
              variant="h1"
            >
              ADD
            </Typography>
            <img
              src="https://readtronic-dev-static-assets.s3-us-west-2.amazonaws.com/Images/Share___no+label%403x.png"
              alt="3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 900,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${BG2})`,
    backgroundSize: "contain",
    padding: 24,
    flexGrow: 1,

    [theme.breakpoints.down("md")]: {
      padding: "24px 16px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: 12,
    },
  },
  textContainer: {
    marginTop: "5%",
    marginLeft: "6%",
  },
  firstHeader: {
    marginBottom: "2%",
  },
  secondHeader: {
    fontSize: 37,
    lineHeight: "1.2",
    marginBottom: "4%",
  },
  buttonsRow: {
    display: "flex",
    marginTop: 10,
    marginLeft: -14,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: 0,
    },
  },
  storeButtons: {
    "&:hover": {
      borderRadius: 16,
    },
  },
  body: {
    width: "77%",
  },
  boy: {
    height: "34%",
    marginTop: 18,
    marginLeft: 0,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const StayInformed = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <QrDialog open={open} handleClose={() => setOpen(false)} />
      <Grid container>
        <Grid item xs={12} sm={5}>
          <div className={classes.textContainer}>
            <Typography className={classes.firstHeader} variant="h1">
              .
            </Typography>
            <Typography className={classes.secondHeader} variant="h3">
              Listen Today Instead of Reading Tomorrow
            </Typography>
            <Typography className={classes.body} variant="body1">
              Easy ‘two click’ upload text-to-speech app that allows active
              people to listen and learn on the go.
            </Typography>

            <div className={classes.buttonsRow}>
              <IconButton
                className={classes.storeButtons}
                onClick={() =>
                  matches
                    ? setOpen(true)
                    : window.location.replace(
                        "https://www.apple.com/ios/app-store/"
                      )
                }
                aria-label="Store"
              >
                <img src={Istore} alt="Istore" />
              </IconButton>
              <IconButton className={classes.storeButtons} aria-label="Store">
                <img src={Gstore} alt="Istore" />
              </IconButton>
            </div>
          </div>

          <img className={classes.boy} src={Man} alt="man" />
        </Grid>
        <Grid item xs={12} sm={7}>
          <SliderComponent />
        </Grid>
      </Grid>
    </div>
  );
};
