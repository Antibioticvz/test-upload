import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { HorizontalStepper } from "./components/HorizontalStepper";

import Back from "./images/back.svg";
import Miscellaneous from "./images/miscellaneous.svg";
import MiscellaneousGray from "./images/miscellaneousGray.svg";
import MiscellaneousWhite from "./images/miscellaneousWhite.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 1035,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Back})`,
    backgroundSize: "contain",
  },
  //
  wrapper: {
    borderRadius: 20,
    boxShadow: "0 20px 80px 0 rgba(117, 126, 117, 0.1)",
    backgroundColor: "#fff",
    margin: 20,
  },
  uploadBox: {
    display: "flex",
    width: "85%",
    margin: "auto",
    minHeight: 265,
    borderRadius: 5,
    backgroundColor: "#f6f7fe",
  },
  dropBox: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: "auto",
    minHeight: 225,
    borderRadius: 14,
    border: "dashed 1px rgba(117, 126, 117, 0.3)",
  },
  headerText: {
    opacity: 0.55,
    fontFamily: "FiraSans",
    fontSize: 20,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 2,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#757e75",
  },
  orText: {
    opacity: 0.5,
    fontFamily: "FiraSans",
    fontSize: 20,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 3.5,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#4279f1",
  },
  uploadFakeButton: {
    display: "flex",
    margin: "auto",
    width: 190,
    height: 62,
    borderRadius: 5,
    backgroundColor: "rgb(66,121,241,0.04)",
  },
  fakeButtonText: {
    margin: "auto",
    fontFamily: "FiraSans",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: "-0.64px",
    color: "#4279f1",
  },
  textFakeButtonContainer: {
    display: "flex",
    margin: "auto",
  },
  uploadIcon: {
    marginRight: 10,
  },
  stepSubmitContainer: {
    justifyContent: "space-between",
    display: "flex",
  },
  submitContainer: {
    padding: 24,
  },
}));

export const Upload = () => {
  const classes = useStyles();
  const formData = new FormData();

  const [uploadFile, setUploadFile] = useState(false);
  const [activeStepUpload, setActiveStepUpload] = useState(0);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log("formData");
      console.log(file);
      // reader.readAsArrayBuffer(file);

      console.log(formData);
      formData.append("myFile", file, file.name);

      formData.append("user_id", "aYxXrN6MLvXZpC7ZtEMymn7X2Nv1");

      setUploadFile(true);
      setActiveStepUpload(1);
      setTimeout(() => setActiveStepUpload(2), 1000);
    },
    [formData]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onUpload = () => {
    // Request made to the backend api
    // Send formData object
    axios.post(
      "https://us-central1-readtronic-b58a6.cloudfunctions.net/api/v1/upload",
      formData
    );
    setTimeout(() => setActiveStepUpload(3), 1000);
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10} className={classes.wrapper}>
          <div className={classes.uploadBox}>
            <div className={classes.dropBox} {...getRootProps()}>
              <input {...getInputProps()} />
              <br />
              <Typography className={classes.headerText}>
                Drag and drop file here (doc, text, word)
              </Typography>
              <Typography className={classes.orText}>Or</Typography>
              <div className={classes.uploadFakeButton}>
                <div className={classes.textFakeButtonContainer}>
                  <img
                    className={classes.uploadIcon}
                    src={Miscellaneous}
                    alt=""
                  />
                  <Typography className={classes.fakeButtonText}>
                    Browse File
                  </Typography>
                </div>
              </div>
              <br />
            </div>
          </div>

          <div className={classes.stepSubmitContainer}>
            <HorizontalStepper
              steps={["Upload", "Convert", "Done"]}
              activeStep={activeStepUpload}
            />
            <div className={classes.submitContainer}>
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
                onClick={() => {
                  onUpload();
                }}
                disabled={!uploadFile && activeStepUpload !== 2}
                startIcon={
                  <img
                    src={
                      !uploadFile && activeStepUpload !== 2
                        ? MiscellaneousGray
                        : MiscellaneousWhite
                    }
                    alt=""
                    color="red"
                  />
                }
              >
                Submit
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
    </div>
  );
};
