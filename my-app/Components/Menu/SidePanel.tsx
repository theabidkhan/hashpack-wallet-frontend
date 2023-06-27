"use client";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useState } from "react";
import SideMenu from "./SideMenu";

const MyIcon = styled("div")(({ theme }) => ({
  position: "absolute",

  height: "24px",
  left: "13px",
  right: "13px",
  top: "21px",
}));

const MyPaper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "50px",
  left: "0px",
  top: "61px",
  bottom: "2px",
  background: "#518B9F",
  boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)",
}));

const TextAreaComponent: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIconHover = () => {
    setIsHovered(true);
  };

  const handleIconLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {!isHovered ? (
        <MyPaper>
          <MyIcon>
            <ListItemIcon
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            >
              <HomeIcon
                sx={{
                  color: "#FEFEFF",
                  width: "24px",
                  height: "20px",
                  cursor: "pointer",
                }}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemIcon>
              <ListAltIcon
                sx={{
                  color: "#FEFEFF",
                  width: "24px",
                  height: "20px",
                  marginTop: "23px",
                }}
                fontSize="small"
              />
            </ListItemIcon>
          </MyIcon>
        </MyPaper>
      ) : (
        <SideMenu />
      )}
    </>
  );
};

export default TextAreaComponent;
