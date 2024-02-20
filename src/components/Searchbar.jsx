import { Search, Tune } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";

const Searchbar = () => {
  return (
    <Box
      sx={{
        width: "52rem",
        bgcolor: "#e9eef6",
        borderRadius: "3rem",
        padding: "0.08rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <IconButton>
        <Search fontSize="medium" />
      </IconButton>
      <InputBase
        placeholder="Search in drive"
        sx={{ width: "88%", fontSize: "1.3rem" }}
      />
      <IconButton>
        <Tune fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default Searchbar;
