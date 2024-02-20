import { Box } from "@mui/material";

// calender - https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png

// keep - https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png

// task - https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png

// profile - https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png

const Sidepannel = () => {
  return (
    <Box
      sx={{
        width: "4rem",
        bgcolor: "#F8FAFD",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Box marginTop="80px">
        <img
          width="25px"
          src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
        />
      </Box>

      <img
        width="25px"
        src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
      />
      <img
        width="25px"
        src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
      />
      <img
        width="25px"
        src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
      />
    </Box>
  );
};

export default Sidepannel;
