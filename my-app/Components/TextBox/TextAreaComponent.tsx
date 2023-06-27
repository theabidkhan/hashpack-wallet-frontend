"use client";
import React from "react";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

interface CustomTextAreaProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rows: number;
}

const StyledTextArea = styled(TextField)({
  "& .MuiInputBase-input": {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#A4A4A4",
  },
  boxSizing: "border-box",
  width: "788px",
  maxWidth: "100%",
  border: "2px solid #B4B4B4",
  borderRadius: "5px",
  position: "relative",
  // left: '246px',
});

const TextAreaComponent: React.FC<CustomTextAreaProps> = ({
  value,
  placeholder,
  onChange,
  rows,
}) => {
  return (
    <StyledTextArea
      variant="outlined"
      multiline
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextAreaComponent;
