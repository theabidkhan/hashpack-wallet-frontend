import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

const MyPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "174px",
  position: "absolute",
  left: "0px",
  top: "61px",
  bottom: "2px",
}));

const MyText = styled("div")(({ theme }) => ({
  height: "20px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#575757",
  flex: "none",
  order: 0,
  flexGrow: 0,
}));

const TextAreaComponent: React.FC = () => {
  return (
    <MyPaper>
      <MyText>
        <MenuList>
          <MenuItem>
            <ListItemText>Dashboard</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>My Projects</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Provider list</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Proposal</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Activity History</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Dispute</ListItemText>
          </MenuItem>
        </MenuList>
      </MyText>
    </MyPaper>
  );
};

export default TextAreaComponent;
