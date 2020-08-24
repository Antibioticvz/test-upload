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
