import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Back from "./images/back.svg";
import Miscellaneous from "./images/miscellaneous.svg";

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

  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Dropzone = () => {
  const classes = useStyles();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={classes.dropBox} {...getRootProps()}>
      <input {...getInputProps()} />
      <br />
      <Typography className={classes.headerText}>
        Drag and drop file here (doc, text, word)
      </Typography>
      <Typography className={classes.orText}>Or</Typography>
      <div className={classes.uploadFakeButton}>
        <div className={classes.textFakeButtonContainer}>
          <img className={classes.uploadIcon} src={Miscellaneous} />
          <Typography className={classes.fakeButtonText}>
            Browse File
          </Typography>
        </div>
      </div>
      <br />
    </div>
  );
};

export const Upload = () => {
  const classes = useStyles();

  // const [loading, setLoading] = React.useState(false);
  // const [success, setSuccess] = React.useState(false);
  // const timer = React.useRef();

  // const buttonClassname = clsx({
  //   [classes.buttonSuccess]: success,
  // });

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timer.current);
  //   };
  // }, []);

  // const handleButtonClick = () => {
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = setTimeout(() => {
  //       setSuccess(true);
  //       setLoading(false);
  //     }, 2000);
  //   }
  // };

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10} className={classes.wrapper}>
          <div className={classes.uploadBox}>
            <Dropzone />
          </div>
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
    </div>
  );
};

// import axios from "axios";

// import React, { Component } from "react";

// export class Upload extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: null,
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();
//     console.log(formData);
//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );

//     formData.append("user_id", "aYxXrN6MLvXZpC7ZtEMymn7X2Nv1");

//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     axios.post(
//       "https://us-central1-readtronic-b58a6.cloudfunctions.net/api/v1/upload",
//       formData
//     );
//   };

//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>
//           <p>File Name: {this.state.selectedFile.name}</p>
//           <p>File Type: {this.state.selectedFile.type}</p>
//           <p>
//             Last Modified:{" "}
//             {this.state.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Readtronic</h1>
//         <h3>File Upload</h3>
//         <div>
//           <input type="file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }
