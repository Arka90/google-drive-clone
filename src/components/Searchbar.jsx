import { Search, Tune } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";

const Searchbar = () => {
  return (
    <Box
      sx={{
        width: "75rem",
        bgcolor: "#e9eef6",
        borderRadius: "3rem",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <IconButton>
        <Search fontSize="large" />
      </IconButton>
      <InputBase
        placeholder="Search in drive"
        sx={{ width: "88%", fontSize: "1.8rem" }}
      />
      <IconButton>
        <Tune fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Searchbar;
