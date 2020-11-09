import React, { useContext, useState } from "react";
import { navigate, usePath } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";

import MiButton from "./MiButton";

import FirebaseContext from "../Firebase";
import Context from "../ContextAuth";

import Logo from "../images/logo.svg";
import BGMobile from "../images/BGMobile.svg";

const useStyles = makeStyles((theme) => ({
  grow: {
    padding: "10px 24px",
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      padding: "10px 16px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 12,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  buttonLabel: {

    marginTop: "-6px",
    
    fontWeight: "bold",
    color: "#4279f1",

    "&:hover": {
      backgroundColor: "#fff",
    },


  },
  buttonHover: {

    marginTop: "-6px",

    "&:hover": {
      backgroundColor: "#fff",
      color: "#4279f1",
    },

  },
  mobileButtonLabel: {
    fontFamily: "Fira Sans",
    marginTop: "-6px",
    
    fontWeight: "bold",
    color: "#4279f1",

    "&:hover": {
      backgroundColor: "#fff",
    },

    "& .MuiButton-label":{
      fontSize: 28,
    }
  },
  mobileButtonHover: {
    fontFamily: "Fira Sans",
    marginTop: "-6px",

    "&:hover": {
      backgroundColor: "#fff",
      color: "#4279f1",
    },

    "& .MuiButton-label":{
      fontSize: 28,
    }
  },
  buttonsTop: {
    height: 47,
    marginLeft: 14,
  },
  buttonsTopLogin: {
    height: 47,
    marginLeft: 14,

    "&:hover": {
      backgroundColor: "rgba(66, 121, 241, 0.3)",
    },
  },

  logoutButton: {
    height: 47,
  },
  headerLogo: {
    marginTop: "-11px",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  headerReadtronic: {
    marginTop: "-8px",
    marginLeft: 5,
    width: 172,
    height: 42,
    fontFamily: "Fira Sans",
    fontSize: 28,
    fontWeight: "bold",
    color: "#292d34",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },

  dialog: {
    width: "100%",
    margin: 0,

    "& .MuiDialog-paperFullScreen": {
      justifyContent: "space-between",
    },
    "& .MuiDialog-paper": {
      backgroundImage: `url(${BGMobile})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const path = usePath();
  const firebase = useContext(FirebaseContext);
  const { auth, setAuth } = useContext(Context);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true)
  };

  return (
    <>
      <Dialog
        className={classes.dialog}
        open={isMobileMenuOpen}
        fullScreen
      >
        <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar} color="default">
          <Toolbar>
        <img
              src={Logo}
              className={classes.headerLogo}
              alt="Logo"
              styles={{ marginTop: "-8px" }}
            />
            <Typography className={classes.headerReadtronic}>
              Readtronic
            </Typography>

            <div className={classes.grow} />

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                onClick={()=>setIsMobileMenuOpen(false)}
                color="inherit"
              >
                <Close />
              </IconButton>
            </div>
        </Toolbar>
        </AppBar>
        </div>

        <div>
        <MenuItem>
            <Button
              disableRipple
              className={
                path === "/login/1" ? classes.mobileButtonLabel : classes.mobileButtonHover
              }
              component={MiButton}
              href="/login/1"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              login
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              disableRipple
              className={
                path === "/login/0" ? classes.mobileButtonLabel : classes.mobileButtonHover
              }
              component={MiButton}
              href="/login/0"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              sign Up Free
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              disableRipple
              className={
                path === "/home" ? classes.mobileButtonLabel : classes.mobileButtonHover
              }
              component={MiButton}
              href="/home"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              home
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              disableRipple
              className={
                path === "/home/price"
                  ? classes.mobileButtonLabel
                  : classes.mobileButtonHover
              }
              component={MiButton}
              href="/home/price"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              pricing
            </Button>
          </MenuItem>
          {auth && (
            <MenuItem>
              <Button
                disableRipple
                className={
                  path === "/upload" ? classes.mobileButtonLabel : classes.mobileButtonHover
                }
                component={MiButton}
                href="/upload"
                onClick={()=>setIsMobileMenuOpen(false)}
              >
                upload
              </Button>
            </MenuItem>
          )}
          <MenuItem>
            <Button
              disableRipple
              className={
                path === "/ourstory" ? classes.mobileButtonLabel : classes.mobileButtonHover
              }
              component={MiButton}
              href="/ourstory"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              our Story
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              disableRipple
              className={
                path === "/contactus"
                  ? classes.mobileButtonLabel
                  : classes.mobileButtonHover
              }
              component={MiButton}
              href="/contactus"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              contact Us
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              disableRipple
              className={
                path === "/sharing" ? classes.mobileButtonLabel : classes.mobileButtonHover
              }
              component={MiButton}
              href="/sharing"
              onClick={()=>setIsMobileMenuOpen(false)}
            >
              Sharing
            </Button>
          </MenuItem>

          <MenuItem>
            <Divider />
          </MenuItem>

          
        </div>
      </Dialog>

      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar} color="default">
          <Toolbar>
            <img
              src={Logo}
              className={classes.headerLogo}
              alt="Logo"
              styles={{ marginTop: "-8px" }}
            />
            <Typography className={classes.headerReadtronic}>
              Readtronic
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button
                disableRipple
                className={
                  path === "/home" ? classes.buttonLabel : classes.buttonHover
                }
                component={MiButton}
                href="/home"
              >
                home
              </Button>
              <Button
                disableRipple
                className={
                  path === "/home/price"
                    ? classes.buttonLabel
                    : classes.buttonHover
                }
                component={MiButton}
                href="/home/price"
              >
                pricing
              </Button>
              {auth && (
                <Button
                  disableRipple
                  className={
                    path === "/upload"
                      ? classes.buttonLabel
                      : classes.buttonHover
                  }
                  component={MiButton}
                  href="/upload"
                >
                  upload
                </Button>
              )}
              <Button
                disableRipple
                className={
                  path === "/ourstory"
                    ? classes.buttonLabel
                    : classes.buttonHover
                }
                component={MiButton}
                href="/ourstory"
              >
                our Story
              </Button>
              <Button
                disableRipple
                className={
                  path === "/contactus"
                    ? classes.buttonLabel
                    : classes.buttonHover
                }
                component={MiButton}
                href="/contactus"
              >
                contact Us
              </Button>
              <Button
                disableRipple
                className={
                  path === "/sharing"
                    ? classes.buttonLabel
                    : classes.buttonHover
                }
                component={MiButton}
                href="/sharing"
              >
                Sharing
              </Button>

              {!auth ? (
                <>
                  <Button
                    className={classes.buttonsTopLogin}
                    component={MiButton}
                    href="/login/1"
                    variant="outlined"
                    color="primary"
                  >
                    login
                  </Button>

                  <Button
                    className={classes.buttonsTop}
                    component={MiButton}
                    href="/login/0"
                    variant="contained"
                    color="primary"
                  >
                    sign Up Free
                  </Button>
                </>
              ) : (
                <Button
                  className={classes.logoutButton}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setAuth(!auth);
                    firebase.doSignOut();
                    navigate("/");
                    localStorage.removeItem(
                      process.env.REACT_APP_LOCAL_STORAGE
                    );
                  }}
                >
                  logout
                </Button>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
