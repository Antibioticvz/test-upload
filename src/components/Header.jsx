import React, { useContext, useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import MiButton from "./MiButton";

import FirebaseContext from "../Firebase";
import Context from "../ContextAuth";

import Logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  grow: {
    marginTop: 40,
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
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
}));

export const Header = () => {
  const classes = useStyles();
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
        <Button component={MiButton} href="/">
          home
        </Button>
      </MenuItem>
      <MenuItem>
        {auth && (
          <Button component={MiButton} href="/upload">
            upload
          </Button>
        )}
      </MenuItem>
      <MenuItem>
        <Button component={MiButton} href="/ourstory">
          our Story
        </Button>
      </MenuItem>
      <MenuItem>
        <Button component={MiButton} href="/contactus">
          contact Us
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar} color="default">
        <Toolbar>
          <img src={Logo} alt="Logo" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button component={MiButton} href="/">
              home
            </Button>
            {auth && (
              <Button component={MiButton} href="/upload">
                upload
              </Button>
            )}
            <Button component={MiButton} href="/ourstory">
              our Story
            </Button>
            <Button component={MiButton} href="/contactus">
              contact Us
            </Button>
          </div>

          {!auth ? (
            <Button
              component={MiButton}
              href="/login"
              variant="contained"
              color="primary"
            >
              login
            </Button>
          ) : (
            <Button
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
