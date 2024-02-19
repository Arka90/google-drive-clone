import { Avatar, Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import Searchbar from "./Searchbar";
import { Apps, HelpOutline, Settings } from "@mui/icons-material";
import BasicMenu from "./Menu";

const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        padding: "1.4rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Box
        sx={{
          flex: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Searchbar />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <HelpOutline fontSize="large" />
          </IconButton>
          <IconButton>
            <Settings fontSize="large" />
          </IconButton>
          <IconButton>
            <Apps fontSize="large" />
          </IconButton>
          <IconButton>
            <BasicMenu />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
