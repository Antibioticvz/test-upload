import React, { useContext, useState } from "react";
import { navigate, usePath } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import MiButton from "./MiButton";

import FirebaseContext from "../Firebase";
import Context from "../ContextAuth";

import Logo from "../images/logo.svg";

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
    backgroundColor: "#fff",
  },
  buttonLabel: {
    marginTop: "-6px",
    fontSize: 15,
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
}));

export const Header = () => {
  const classes = useStyles();
  const path = usePath();
  const firebase = useContext(FirebaseContext);
  const { auth, setAuth } = useContext(Context);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
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
      </MenuItem>
      <MenuItem>
        <Button
          disableRipple
          className={
            path === "/home/price" ? classes.buttonLabel : classes.buttonHover
          }
          component={MiButton}
          href="/home/price"
        >
          pricing
        </Button>
      </MenuItem>
      {auth && (
        <MenuItem>
          <Button
            disableRipple
            className={
              path === "/upload" ? classes.buttonLabel : classes.buttonHover
            }
            component={MiButton}
            href="/upload"
          >
            upload
          </Button>
        </MenuItem>
      )}
      <MenuItem>
        <Button
          disableRipple
          className={
            path === "/ourstory" ? classes.buttonLabel : classes.buttonHover
          }
          component={MiButton}
          href="/ourstory"
        >
          our Story
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          disableRipple
          className={
            path === "/contactus" ? classes.buttonLabel : classes.buttonHover
          }
          component={MiButton}
          href="/contactus"
        >
          contact Us
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          disableRipple
          className={
            path === "/sharing" ? classes.buttonLabel : classes.buttonHover
          }
          component={MiButton}
          href="/sharing"
        >
          Sharing
        </Button>
      </MenuItem>

      <MenuItem>
        <Divider />
      </MenuItem>

      <MenuItem>
        <Button
          className={classes.buttonsTop}
          fullWidth
          component={MiButton}
          href="/login/1"
          variant="outlined"
          color="primary"
        >
          login
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          className={classes.buttonsTop}
          fullWidth
          component={MiButton}
          href="/login/0"
          variant="contained"
          color="primary"
        >
          sign Up Free
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
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
                  path === "/upload" ? classes.buttonLabel : classes.buttonHover
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
                path === "/ourstory" ? classes.buttonLabel : classes.buttonHover
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
                path === "/sharing" ? classes.buttonLabel : classes.buttonHover
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
                  localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
                }}
              >
                logout
              </Button>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
