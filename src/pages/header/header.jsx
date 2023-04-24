import * as React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { Booleans } from "../../redux/Counter";
import { counterSlice } from "../../redux/Counter";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import VideoCamer from "../../assets/imgs/VideoCamer";
import Kvadrat from "../../assets/imgs/Kvadrat";
import Qongiroq from "../../assets/imgs/Qongiroq";
import { Avatar } from "@mui/material";
import YutubeIcon from "../../assets/imgs/YutubeIcon";
import { useRef } from "react";
import { useState } from "react";
import Search from "../../components/search/Search";

export default function Header({ setVideosApp, setSelectedVideosApp }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const dispatch = useDispatch();

  function ButonBurger() {
    dispatch(Booleans());
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
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
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='medium' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={0} color='error'>
            <VideoCamer />
          </Badge>
        </IconButton>
        <p>VIdeoCamera</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={0} color='error'>
            <Kvadrat />
          </Badge>
        </IconButton>
        <p>Menyu</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' aria-label='show 17 new notifications'>
          <Badge badgeContent={17} color='error'>
            <Qongiroq />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          style={{ paddingLeft: "10px" }}
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <Avatar alt='Remy Sharp' src='' />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            background: "white",
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
          sx={{
            paddingLeft: { xs: "5px", sm: "10px" },
            paddingRight: { xs: "10px", sm: "20px" },
          }}
        >
          <IconButton
            onClick={() => ButonBurger()}
            size=' 20px'
            edge='start'
            aria-label='open drawer'
            sx={{
              mr: "28px",
              display: { xs: "none", md: "block" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ display: "block", width: "215px" }}
            noWrap
            component='div'
          >
            <YutubeIcon />
          </Typography>
          <div className='w-100'>
            <Search
              setVideosApp={setVideosApp}
              setSelectedVideosApp={setSelectedVideosApp}
            />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
            >
              <Badge
                badgeContent={0}
                color='error'
                style={{ marginRight: "50px" }}
              >
                <VideoCamer />
              </Badge>
              <Badge
                badgeContent={0}
                color='error'
                style={{ marginRight: "50px" }}
              >
                <Kvadrat />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              // color='inherit'
              style={{ marginRight: "50px" }}
            >
              <Badge badgeContent={1} color='error'>
                {/* <NotificationsIcon /> */}
                <Qongiroq />
              </Badge>
            </IconButton>
            <IconButton
              style={{
                width: "40px",
                height: "40px",
                paddingTop: "15px",
              }}
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              // color='inherit'
            >
              <Avatar alt='Remy Sharp' src='' />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
