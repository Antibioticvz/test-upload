import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Check from "@material-ui/icons/Check";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
  },
  active: {
    color: "#4279f1",
  },
  circleContainer: {
    display: "flex",
    width: 22,
    height: 22,
    borderRadius: "50%",
    backgroundColor: "#4279f1",
  },
  circle: {
    width: 22,
    height: 22,
    margin: "auto",
    borderRadius: "50%",
    backgroundColor: "#d9e4fc",
  },
  completed: {
    color: "#fff",
    margin: "auto",
    zIndex: 1,
    fontSize: 18,
  },
});

const QontoConnector = withStyles({
  root: {
    background: "none",
  },
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 11px)",
    right: "calc(50% + 11px)",
  },
  active: {
    "& $line": {
      borderColor: "#4279f1",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#4279f1",
    },
  },
  line: {
    borderColor: "#d9e4fc",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={classes.circleContainer}>
          <Check className={classes.completed} />
        </div>
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  stepperRoot: {
    borderRadius: 20,
    width: "56%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export const HorizontalStepper = ({ steps, activeStep }) => {
  const classes = useStyles();

  return (
    <div className={classes.stepperRoot}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon} icon={null}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
