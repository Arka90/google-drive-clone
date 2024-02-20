import { InfoOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";

const Computers = () => {
  useEffect(() => {
    document.title = "Computers";
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Computers</Typography>
        <Box>
          <IconButton>
            <InfoOutlined />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img
          width="200px"
          src="https://ssl.gstatic.com/docs/doclist/images/empty_state_computers_v4.svg"
        />
        <Typography variant="h5">No folder syncing with drive</Typography>
        <Typography
          sx={{
            fontSize: "18px",
            marginTop: "5px",
            fontFamily: "sans-serif",
            color: "#333",
          }}
          variant="p"
        >
          Folders on your computer that you sync with Drive using Drive for
          desktop <br /> will show up here.
        </Typography>
      </Box>
    </>
  );
};

export default Computers;
