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
                What the heck is Readtronic?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Why choose Readtronic?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes, you can. You can tell us how many reviews you want us to
                post daily once you buy ios reviews, or android reviews, for
                this, you can either email us, or add our representative on
                skype.
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
                Can I provide my own reviews?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                How can I cancel my subscriptions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Why choose readtronic?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Why I can access my account multiple devices?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};
