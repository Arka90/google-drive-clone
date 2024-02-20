import { Box } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
const ViewSwitch = () => {
  return (
    <Box
      sx={{
        border: "1.5px solid #222",
        padding: "6px 7px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "75px",
      }}
    >
      <Box>
        <ListIcon />
      </Box>
      <Box>
        <GridViewIcon />
      </Box>
    </Box>
  );
};

export default ViewSwitch;
