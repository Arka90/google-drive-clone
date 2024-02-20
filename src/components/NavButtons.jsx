import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavButtons = ({ name }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{
        borderColor: "#333",
        color: "#333",
        "&:hover": {
          borderColor: "#333",
        },
        borderRadius: "8px",
      }}
    >
      {name}
      <KeyboardArrowDownIcon />
    </Button>
  );
};

export default NavButtons;
