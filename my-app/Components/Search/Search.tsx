'use client';

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import InputBase from "@mui/material/InputBase";

// import "./Header.css";
// import SearchIcon from "@mui/icons-material/SearchOutlined";


// const useStyle = styled(AppBar)(() => ({
//    position: 'static',
//     background: "#79C1DD",
//     height: "62px",
 
  // NavSearch: {
  //   width: "350px",
  //   background: "#FFFFFF",
  //   border: "1px solid #B4B4B4",
  //   borderRadius: "3px",
  //   fontFamily: "Inter",
  //   fontStyle: "normal",
  //   fontWeight: 400,
  //   fontSize: "12px",
  //   lineHeight: "15px",
  //   display: "flex",
  //   alignItems: "center",
  //   color: "#B4B4B4",
  // },
  // NavPlaceholder: {
  //   width: "100%",
  //   display: "flex",
  //   color: "#B4B4B4",
  //   "&:hover": {
  //     backgroundColor: "#FFFFFF",
  //   },
  // },
  // SearchIcon: {
  //   color: "#B4B4B4",
  //   "&:hover": {
  //     color: "black",
  //   },
  // },
// }));




const StyledInputBase = styled(InputBase)(({ theme }) => ({
 width: "786px",
    display: "flex",
    position: 'absolute',
    left: '146px',
    marginLeft: '30px',
    // [`@media (min-width: 768px)`]: {
    //   left: `calc(50% - ${(786 / 2) - 101}px)`,
    // },
   
    color: "#B4B4B4",
    backgroundColor: "#FFFFFF",
    border: '1px solid #B4B4B4',
    borderRadius: '5px',
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  // color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
        width:'350px',
    },
  },
}));

export default function SearchBox() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  // const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 

   

 

  return (
 

      
      
       

    //       <Search sx={{width: "350px",
    // background: "#FFFFFF",
    // border: "1px solid #B4B4B4",
    // borderRadius: "3px",
    // fontFamily: "Inter",
    // fontStyle: "normal",
    // fontWeight: 400,
    // fontSize: "12px",
    // lineHeight: "15px",
    // display: "flex",
    // alignItems: "center",
    // color: "#B4B4B4",}}>
    //         <SearchIconWrapper>
    //           <SearchIcon  />
    //         </SearchIconWrapper>
            <StyledInputBase
            
              
              placeholder="Search freelancer/agency/projects"
              inputProps={{ "aria-label": "search" }}
            />
        //   </Search>
         
   
  );
}
