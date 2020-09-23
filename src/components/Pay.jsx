import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import Free from "../images/free.svg";
import Basic from "../images/Basic.svg";
import Pro from "../images/pro.svg";
import Check from "../images/check.svg";
import No from "../images/no.svg";
import Flag from "../images/flag.svg";
import Vip from "../images/vip.svg";

import Player from "./Player";
import Sophie from "./../Sophie.wav";
import Mark from "./../Mark.wav";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    fontSize: 37,
    marginTop: 12,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: "1",
  },
  subHeader: {
    fontSize: 23,
    marginTop: 12,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: "1",
  },
  proCardHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    borderRadius: "20px 20px 0 0",
    background: "#4279f1",
  },
  cardHeader: {
    fontSize: 25,
    marginTop: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  cardHeaderPro: {
    fontSize: 25,
    color: "#fff",
    marginLeft: 7,
    marginTop: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  cardsBody: {
    display: "flex",
    flexDirection: "column",
  },
  cardsContainer: {
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "8%",
    paddingRight: "8%",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3%",
      paddingRight: "3%",
    },
  },
  cardGrid: {
    borderRadius: 20,
    margin: "2%",
    border: "solid 1px #e4e5e4",
  },
  mainPrice: {
    fontFamily: "Fira Sans",
    fontSize: 37,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "-2px",
    textAlign: "center",
    color: "#4279f1",
  },
  flag: {
    marginTop: "-37px",
  },
  flagShadow: {
    boxShadow: "-2px 3px 6px 0px rgba(0, 0, 0, 0.16)",
    width: "fit-content",
    height: 33,
  },
  oldPrice: {
    fontFamily: "Fira Sans",
    fontWeight: 500,
    fontSize: 23,
    textDecoration: "line-through",
    lineHeight: "1",
    marginBottom: 2,
    marginTop: "-25px",
    letterSpacing: "-1.16px",
    textAlign: "center",
    color: "#4279f1",
  },
  period: {
    marginTop: 12,
    fontFamily: "Fira Sans",
    fontSize: 12,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "-0.6px",
    textAlign: "center",
    color: "#757e75",
  },
  explanation: {
    fontSize: 16,
    textAlign: "center",
    margin: "4% 3%",
  },
  listItem: {
    display: "flex",
    margin: "9px 20%",
  },
  listItemIcon: {
    display: "flex",
    marginRight: 5,
  },
  listItemText: {
    margin: "auto 3px auto",
  },
  listText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "1.12",
    color: "#292d34",
  },
  listTextNo: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "1.12",
    color: "#757e75",
  },
  buttonContainer: {
    margin: "34px auto",
    width: "50%",
  },
  buttonFree: {
    border: "none",
    letterSpacing: "-0.72px",
    fontWeight: "bold",
    color: "#4279f1",
    backgroundColor: "rgb(66, 121, 241, 0.1)",
    fontFamily: "Fira Sans",
    fontSize: 16,

    [theme.breakpoints.down("sm")]: {
      letterSpacing: "-1px",
      fontSize: 15,
    },
  },
  buttonBasic: {
    letterSpacing: "-0.72px",
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Fira Sans",
    fontSize: 16,

    [theme.breakpoints.down("sm")]: {
      letterSpacing: "-1px",
      fontSize: 15,
    },
  },
  buttonPro: {
    letterSpacing: "-0.72px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#674af8",
    fontFamily: "Fira Sans",
    fontSize: 16,

    [theme.breakpoints.down("sm")]: {
      letterSpacing: "-1px",
      fontSize: 15,
    },
  },
  iconContainerPro: {
    display: "flex",
    backgroundColor: "#4279f1",
  },
  iconContainer: {
    display: "flex",
    backgroundColor: "#fff",
  },
  iconWrapper: {
    display: "flex",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  img: {
    margin: "auto",
  },
}));

const Card = ({
  pro,
  header,
  icon,
  price,
  oldPrice,
  period,
  explanation,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.cardsBody}>
      <div className={pro && classes.proCardHeader}>
        {pro && <img src={Vip} />}
        <Typography
          className={pro ? classes.cardHeaderPro : classes.cardHeader}
          variant="h4"
        >
          {header}
        </Typography>
      </div>

      <div className={pro ? classes.iconContainerPro : classes.iconContainer}>
        <div className={classes.iconWrapper}>{icon}</div>
      </div>

      {pro && (
        <Typography className={classes.oldPrice} variant="h4">
          {oldPrice}
        </Typography>
      )}

      <Typography className={classes.mainPrice} variant="h4">
        {price}
      </Typography>

      <div className={classes.flag}>
        <div className={classes.flagShadow}>
          {pro && <img src={Flag} alt="" />}
        </div>
      </div>

      <Typography className={classes.period} variant="body1">
        {period}
      </Typography>
      <Typography className={classes.explanation} variant="body1">
        {explanation}
      </Typography>

      {children}
    </div>
  );
};

const ListItem = ({ condition, text }) => {
  const classes = useStyles();

  const icon = () => {
    switch (condition) {
      case "check":
        return <img src={Check} />;
      case "no":
        return <img src={No} />;
      case "playBasic":
        return <Player url={Mark} />;
      case "playPro":
        return <Player url={Sophie} />;

      default:
        break;
    }
  };

  return (
    <div className={classes.listItem}>
      <div className={classes.listItemIcon}>{icon(condition)}</div>
      <div className={classes.listItemText}>
        <Typography
          className={condition !== "no" ? classes.listText : classes.listTextNo}
          variant="body1"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};

export const Pay = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.header} variant="h2">
        Choose The Best Plan For You
      </Typography>
      <Typography className={classes.subHeader} variant="h3">
        Level Up Your Productivity
      </Typography>

      <Container maxWidth={false}>
        <Grid className={classes.cardsContainer} container>
          <Grid item xs={12} sm={4}>
            <div className={classes.cardGrid}>
              <Card
                header="Free"
                icon={<img className={classes.img} src={Free} height="180px" />}
                price="Free"
                period="/per month"
                explanation="Our basic plan provides everyone free access to the power Readtronic"
              >
                <>
                  <ListItem
                    condition="check"
                    text="Unlimited Listening to Basic Voices"
                  />
                  <ListItem
                    condition="check"
                    text="Website & Chrome Ext. Upload"
                  />
                  <ListItem condition="no" text="Advertisements" />
                  <ListItem
                    condition="no"
                    text="Unlimited Access to World-Class HD Voices"
                  />
                  <ListItem condition="playBasic" text="Basic Voice Sample" />

                  <div className={classes.buttonContainer}>
                    <Button className={classes.buttonFree} variant="outlined">
                      Sign Up For Free
                    </Button>
                  </div>
                </>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.cardGrid}>
              <Card
                header="Basic Subscription"
                icon={
                  <img className={classes.img} src={Basic} height="180px" />
                }
                price="$5.99"
                period="/per month"
                explanation="Cut out the interruptions with our 
              light plan for an ad-free experience"
              >
                <>
                  <ListItem
                    condition="check"
                    text="Unlimited Listening to Basic Voices"
                  />
                  <ListItem
                    condition="check"
                    text="Website & Chrome Ext. Upload"
                  />
                  <ListItem condition="check" text="No Ads" />
                  <ListItem
                    condition="no"
                    text="Unlimited Access to World-Class HD Voices"
                  />
                  <ListItem condition="playBasic" text="Basic Voice Sample" />

                  <div className={classes.buttonContainer}>
                    <Button
                      className={classes.buttonBasic}
                      variant="contained"
                      color="primary"
                    >
                      Get 14 Days Free
                    </Button>
                  </div>
                </>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.cardGrid}>
              <Card
                pro
                header="Pro Subscription"
                icon={<img className={classes.img} src={Pro} height="180px" />}
                price="$8.99"
                oldPrice="$ 12.99"
                period="/per month"
                explanation="Enjoy the ultimate Readtronic experience complete with World-Class high def voices"
              >
                <>
                  <ListItem
                    condition="check"
                    text="Unlimited Listening to Basic Voices"
                  />
                  <ListItem
                    condition="check"
                    text="Website & Chrome Ext. Upload"
                  />
                  <ListItem condition="check" text="No Ads" />
                  <ListItem
                    condition="check"
                    text="Unlimited Access to World-Class HD Voices"
                  />
                  <ListItem condition="playPro" text="Pro Voice Sample" />

                  <div className={classes.buttonContainer}>
                    <Button
                      className={classes.buttonPro}
                      variant="contained"
                      color="primary"
                    >
                      Get 30 Days Free
                    </Button>
                  </div>
                </>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
