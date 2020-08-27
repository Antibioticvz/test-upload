import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "OpenSans, FiraSans, Poppins",
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
        fontFamily: "FiraSans",
        fontSize: 60,
        lineHeight: "1.25",
        fontWeight: "bold",
        textAlign: "left",
        color: "#292d34",
      },
      h2: {
        fontFamily: "FiraSans",
        fontSize: 55,
        fontWeight: "bold",
        textAlign: "left",
        color: "#292d34",
      },
      h3: {
        fontFamily: "FiraSans",
        fontSize: 32,
        lineHeight: "2.34",
        fontWeight: "bold",
        textAlign: "left",
        color: "#292d34",
      },
      h4: {
        fontFamily: "FiraSans",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#757e75",
        letterSpacing: "-1px",
      },
      body1: {
        fontFamily: "OpenSans",
        fontSize: 17,
        textAlign: "left",
        color: "#757e75",
        lineHeight: "1.5",
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
  },
});

export default theme;
