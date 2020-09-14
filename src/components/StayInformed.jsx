import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Back from "../images/back.svg";
import Man from "../images/Man.svg";
import Istore from "../images/Istore.svg";
import Gstore from "../images/Gstore.svg";

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
    this.items[0].removeEventListener("click", this.item_1Click);
    this.items[2].removeEventListener("click", this.item_3Click);
    this.next();
  };

  item_1Click = () => {
    this.items[0].removeEventListener("click", this.item_1Click);
    this.items[2].removeEventListener("click", this.item_3Click);
    this.previous();
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
    this.items.unshift(this.items[2]);
    this.headers.unshift(this.headers[2]);
    this.items.pop();
    this.headers.pop();
    this.reclass();
    this.listeners();
  };

  previous = () => {
    this.items.push(this.items[0]);
    this.headers.push(this.headers[0]);
    this.items.shift();
    this.headers.shift();
    this.reclass();
    this.listeners();
  };
}

const useStylesComponent = makeStyles((theme) => ({
  header: {
    fontSize: 77,

    [theme.breakpoints.down("md")]: {
      fontSize: 60,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
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
    }, 3000);
  }, []);

  return (
    <>
      <div id="slider" ref={elemRef} className="slider">
        <div className="item item-1">
          <Typography
            className={"header header-1" + " " + classes.header}
            variant="h1"
          >
            ADD
          </Typography>
          <img
            src="https://readtronic-dev-static-assets.s3-us-west-2.amazonaws.com/Images/Find___No+Label%403x.png"
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
            src="https://readtronic-dev-static-assets.s3-us-west-2.amazonaws.com/Images/Share___no+label%403x.png"
            alt="2"
          />
        </div>
        <div className="item item-3">
          <Typography
            className={"header header-3" + " " + classes.header}
            variant="h1"
          >
            LISTEN
          </Typography>
          <img
            src="https://readtronic-dev-static-assets.s3-us-west-2.amazonaws.com/Images/Listen__3+Articles%403x.png"
            alt="3"
          />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 1035,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Back})`,
    backgroundSize: "contain",
  },
  textContainer: {
    marginTop: "20%",
    marginLeft: "6%",
  },
  firstHeader: {
    marginBottom: "2%",
  },
  secondHeader: {
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
    width: "70%",
  },
  boy: {
    height: "40%",
    marginTop: 24,
    marginLeft: 16,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const StayInformed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <div className={classes.textContainer}>
            <Typography className={classes.firstHeader} variant="h1">
              Stay Informed
            </Typography>
            <Typography className={classes.secondHeader} variant="h3">
              Listen Today Instead of Reading Tomorrow
            </Typography>
            <Typography className={classes.body} variant="body1">
              Easy ‘two click’ upload text-to-speech app that allows active
              people to listen and learn on the go.
            </Typography>

            <div className={classes.buttonsRow}>
              <IconButton className={classes.storeButtons} aria-label="Store">
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
          {/* <img src={Stay} alt="Stay" width="100%" /> */}
          <SliderComponent />
        </Grid>
      </Grid>
    </div>
  );
};
