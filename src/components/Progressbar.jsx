import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const Progressbar = () => {
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <BorderLinearProgress variant="determinate" value={12} />
      <Typography sx={{ marginTop: "8px", fontStyle: "light" }}>
        {0.12 * 1024}Mb used of 1GB
      </Typography>
    </Box>
  );
};

export default Progressbar;
