import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Faq from "../images/faq.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "6%",
    marginRight: "6%",
    marginBottom: 150,
    marginTop: 160,
  },
  gridContainer: {},
  header: {
    lineHeight: "1.27",
    letterSpacing: "normal",
    textAlign: "center",
  },
  subHeader: {
    lineHeight: "1.5",
    letterSpacing: "normal",
    textAlign: "center",
    marginBottom: 74,
  },
  accordionContainer: {
    margin: "20px 0",
    padding: 13,
  },
  accHeaderExpanded: {
    fontWeight: "bold",
    color: "#4279f1",
  },
  accHeader: {
    fontWeight: "bold",
    color: "#292d34",
  },
}));

export const FAQ = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h2">
        Frequently Asked questions
      </Typography>
      <Typography className={classes.subHeader} variant="body1">
        Like we just leave you hanging/make you read all this. Press the play
        button to listen to the FAQs.
      </Typography>

      <Grid className={classes.gridContainer} container>
        <Grid item xs={12} sm={6}>
          <img src={Faq} width="98%" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Accordion
            className={classes.accordionContainer}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={
                  expanded === "panel1"
                    ? classes.accHeaderExpanded
                    : classes.accHeader
                }
                variant="body1"
              >
                What is Readtronic?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We built Readtronic to help you combat information overload. The
                Readtronic app empowers you to listen to everything that has
                piled up while you’re cleaning the house, walking the dog,
                driving to work, or going for a run to help you finally feel
                caught up.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={classes.accordionContainer}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={
                  expanded === "panel2"
                    ? classes.accHeaderExpanded
                    : classes.accHeader
                }
                variant="body1"
              >
                How can I add content to my Readtronic app?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Once you’ve installed the Readtronic app, you can add content
                any place — Safari, Chrome, news apps — you see the . You can
                also add files — docx, pdfs, and txt — via our website or
                quickly add webpages with our Chrome extension. This content
                will show up in your app on your phone ready for listening on
                the go.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={classes.accordionContainer}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={
                  expanded === "panel3"
                    ? classes.accHeaderExpanded
                    : classes.accHeader
                }
                variant="body1"
              >
                How good are these “premium” voices?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We love them, but you don’t take our word for it. Judge for
                yourself. Click the samples above in the pricing section or just
                download our iOS app, navigate to the main player screen, and
                click the “Voices” button. You can listen to samples of all our
                premium voices by pressing the play buttons on the right side of
                each row.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={classes.accordionContainer}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={
                  expanded === "panel4"
                    ? classes.accHeaderExpanded
                    : classes.accHeader
                }
                variant="body1"
              >
                Why do we have ads?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Ads are…sub-optimal. However, we want to continue to innovate to
                deliver the best experience possible and, unfortunately, that
                takes money. We will do our best to be respectful of your time
                and try to keep these bill-paying interruptions to a minimum.
                Alternatively, we offer two subscription options that eliminate
                ads. We know time are tough, so we’ve pushed to keep the prices
                as low as possible for our ad-free options, so if ads are a deal
                breaker, check those out.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={classes.accordionContainer}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={
                  expanded === "panel5"
                    ? classes.accHeaderExpanded
                    : classes.accHeader
                }
                variant="body1"
              >
                How can I recommend a new feature?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We are dedicated to constantly improving Readtonic. Please pop
                over to our contact page and tell us what you think would help
                Readtronic better server you and make your life better.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={classes.accordionContainer}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={
                  expanded === "panel6"
                    ? classes.accHeaderExpanded
                    : classes.accHeader
                }
                variant="body1"
              >
                Where can I download the Readtronic app?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Currently, we are only supporting Apple devices. You can
                download our iOS app here. We are working on Readtronic for
                Android. It’s just harder to get perfect with all the different
                Android devices out there. Sign up here if you’d like to be one
                of our beta test guinea pigs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};
