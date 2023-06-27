"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Settings from "@mui/icons-material/Settings";
import SearchBar from "../Search/Search";
import Paper from "@mui/material/Paper";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styles from './Header.module.scss';


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuList>
      <MenuItem onClick={handleMenuClose}>
      <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon>
            <FavoriteBorderOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Shortlist</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
      </MenuItem>
      </MenuList>
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
        <MailIcon />

        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon sx={{ left: "37.1%", right: "37.1%" }} />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlined />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.head}>
      <AppBar
        sx={{
          position: "static",
          background: "#79C1DD",
          height: "62px",
          paddingLeft: "-20px",
        }}
        // sx={{styles.head}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>

          <Image src="icons/MO_LOGO.svg" alt="logo" width={96.88} height={42} />
          <SearchBar />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton size="large" color="primary">
              <Image
                src="wallets/wallet.svg"
                alt="wallet"
                width={144}
                height={32}
              />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleOutlined sx={{ width: "20px", height: "20px" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            ></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

     {/* {renderMobileMenu} */}
      {renderMenu} 
    </Box>
  );
}
