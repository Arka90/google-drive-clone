import { Button } from "@mui/material";

const NewButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        bgcolor: "white",
        color: "black",
        width: "100px",
        height: "60px",
        boxShadow: 1,
        fontSize: "18px",
        borderRadius: "16px",
        marginLeft: "15px",
        marginBottom: "18px",
      }}
    >
      + Add
    </Button>
  );
};

export default NewButton;
