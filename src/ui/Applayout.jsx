import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button, Typography } from "@mui/material";
import Sidepannel from "../components/Sidepannel";

import NewButton from "../components/NewButton";

import SidebarOptionsContainer from "../components/SidebarOptionsContainer";
import Progressbar from "../components/Progressbar";
const drawerWidth = 240;

export default function Applayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderWidth: 0,
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#F8FAFD",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <img src={logo} width="38px" />
          <Typography variant="h5">Drive</Typography>
        </Toolbar>
        <NewButton />
        <SidebarOptionsContainer />
        <Box sx={{ width: "100%" }}>
          <Progressbar />
        </Box>

        <Box sx={{ width: "80%", margin: "15px auto" }}>
          <Button
            sx={{
              border: "1px solid black",
              color: "#1967d2",
              borderRadius: "50px",
            }}
            variant="outlined"
          >
            Get more storage
          </Button>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          height: "100vh",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Sidepannel />
    </Box>
  );
}
