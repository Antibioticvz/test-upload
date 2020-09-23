import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "-apple-system,Open Sans,Fira Sans,Poppins",
  },
  palette: {
    primary: {
      main: "#4279f1",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "Fira Sans",
        fontSize: 60,
        lineHeight: "1.25",
        fontWeight: "bold",
        textAlign: "left",
        color: "#292d34",
      },
      h2: {
        fontFamily: "Fira Sans",
        fontSize: 55,
        fontWeight: "bold",
        textAlign: "left",
        color: "#292d34",
      },
      h3: {
        fontFamily: "Fira Sans",
        fontSize: 32,
        lineHeight: "2.34",
        fontWeight: "bold",
        textAlign: "left",
        color: "#292d34",
      },
      h4: {
        fontFamily: "Fira Sans",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#757e75",
        letterSpacing: "-1px",
      },
      body1: {
        fontFamily: "Open Sans",
        fontSize: 17,
        textAlign: "left",
        color: "#757e75",
        lineHeight: "1.5",
      },
    },
    MuiStepLabel: {
      alternativeLabel: {
        fontFamily: "Fira Sans",
        fontSize: 17,
        letterSpacing: "-0.68px",
      },
    },
    MuiButton: {
      root: {
        fontFamily: "Poppins",
        textTransform: "capitalize",
        borderRadius: 8,
        height: 58,
      },
      label: {
        fontSize: 17,
        margin: "0 10px",
      },
    },
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0)",
        },
      },
    },
    MuiStepper: {
      root: {
        background: "none",
      },
    },
  },
});

export default theme;
