import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Free from "../images/free.svg";
import Basic from "../images/Basic.svg";
import Pro from "../images/pro.svg";
import Check from "../images/check.svg";
import No from "../images/no.svg";
import Pause from "../images/pause.svg";
import Play from "../images/play.svg";
import Flag from "../images/flag.svg";
import Vip from "../images/vip.svg";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
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
    marginTop: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  cardHeaderPro: {
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
    padding: "3%",
  },
  cardGrid: {
    borderRadius: 20,
    margin: "2%",
    border: "solid 1px #e4e5e4",
  },
  mainPrice: {
    fontFamily: "FiraSans",
    fontSize: 50,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "-2px",
    textAlign: "center",
    color: "#4279f1",
  },
  flag: { marginTop: "-41px" },
  oldPrice: {
    fontFamily: "FiraSans",
    fontWeight: 500,
    fontSize: 29,
    textDecoration: "line-through",
    lineHeight: "1",
    marginBottom: 2,
    marginTop: "-31px",
    letterSpacing: "-1.16px",
    textAlign: "center",
    color: "#4279f1",
  },
  period: {
    fontFamily: "FiraSans",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "-0.6px",
    textAlign: "center",
    color: "#757e75",
  },
  explanation: {
    textAlign: "center",
    margin: "5% 9%",
  },
  listItem: {
    display: "flex",
    margin: "10px 20%",
  },
  listItemIcon: {
    display: "flex",
    marginRight: 5,
  },
  listItemText: {
    margin: "auto 3px auto",
  },
  listText: {
    fontFamily: "OpenSans",
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: "1.12",
    color: "#292d34",
  },
  listTextNo: {
    fontFamily: "OpenSans",
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: "1.12",
    color: "#757e75",
  },
  buttonContainer: {
    margin: "37px auto",
    width: "50%",
  },
  buttonFree: {
    border: "none",
    letterSpacing: "-0.72px",
    fontWeight: "bold",
    color: "#4279f1",
    fontFamily: "FiraSans",
    fontSize: 18,
  },
  buttonBasic: {
    letterSpacing: "-0.72px",
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "FiraSans",
    fontSize: 18,
  },
  buttonPro: {
    letterSpacing: "-0.72px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#674af8",
    fontFamily: "FiraSans",
    fontSize: 18,
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

      {icon}
      {pro && (
        <Typography className={classes.oldPrice} variant="h4">
          {oldPrice}
        </Typography>
      )}
      <Typography className={classes.mainPrice} variant="h4">
        {price}
      </Typography>
      {pro && (
        <div className={classes.flag}>
          <img src={Flag} />
        </div>
      )}
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
      case "pause":
        return <img src={Pause} />;
      case "play":
        return <img src={Play} />;

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
        Choose The Best Play For You
      </Typography>
      <Typography className={classes.header} variant="h3">
        Level Up Your Productivity
      </Typography>

      <Grid className={classes.cardsContainer} container>
        <Grid item xs={12} sm={4}>
          <div className={classes.cardGrid}>
            <Card
              header="Free"
              icon={<img className={classes.img} src={Free} height="233px" />}
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
                <ListItem condition="pause" text="Basic Voice Sample" />

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
              icon={<img className={classes.img} src={Basic} height="233px" />}
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
                <ListItem condition="pause" text="Basic Voice Sample" />

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
              icon={<img className={classes.img} src={Pro} height="233px" />}
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
                <ListItem condition="play" text="Pro Voice Sample" />

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
    </>
  );
};
