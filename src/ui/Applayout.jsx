import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";

import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.svg";
import { Button } from "@mui/material";

const drawerWidth = 240;

function Applayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.3rem",
          padding: "1.4rem",
        }}
      >
        <img src={logo} width="45rem" />
        <Typography variant="h3">Drive</Typography>
      </Box>

      <Button
        variant="outlined"
        sx={{
          bgcolor: "#fff",
          color: "black",
          boxShadow: 2,
          fontSize: "1.5rem",
          padding: "1.4rem 2.8rem",
          marginLeft: "2rem",
          marginTop: "1rem",
          borderRadius: "1.8rem",
          marginBottom: "0.6rem",
        }}
      >
        + New
      </Button>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar drawerWidth={drawerWidth} />

        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            bgcolor: "#F8FAFD",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderWidth: 0,
              },
            }}
            PaperProps={{
              sx: {
                backgroundColor: "#F8FAFD",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderWidth: 0,
              },
            }}
            PaperProps={{
              sx: {
                backgroundColor: "#F8FAFD",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          marginLeft: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        bgcolor="red"
        height="100%"
      >
        <Outlet />
      </Box>
    </>
  );
}

export default Applayout;
