"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface ButtonProps {
  name: string;
  left: string;
  top: string;
}

const Container = styled("div")<ButtonProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const ButtonStyle = styled(Button)({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  position: "absolute",
  height: "32px",
  letterSpacing: "0.25px",
  color: "#FFFFFF",
  borderRadius: "5px",
  boxShadow: "none",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontSize: 14,
  lineHeight: "17px",

  fontStyle: "normal",
  "&:hover": {
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#00B7FD",
    color: "#FFFFFF",
  },
});
const ButtonPrimary: React.FC<ButtonProps> = ({ name, left, top }) => {
  return (
    <Container left={left} top={top} name={name}>
      <ButtonStyle
        variant="contained"
        sx={{ backgroundColor: "#00B7FD !important" }}
      >
        {name}
      </ButtonStyle>
    </Container>
  );
};
export default ButtonPrimary;
