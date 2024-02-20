import { InfoOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import ViewSwitch from "../components/ViewSwitch";
import NavButtons from "../components/NavButtons";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Home</Typography>
        <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <ViewSwitch />
          <IconButton>
            <InfoOutlined />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "15px",
          marginTop: "10px",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Suggested</Typography>
        <NavButtons name="Type" />
        <NavButtons name="People" />
        <NavButtons name="Modify" />
        <NavButtons name="Location" />
      </Box>
    </Box>
  );
};

export default Home;
