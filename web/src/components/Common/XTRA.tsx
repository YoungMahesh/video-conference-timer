import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { indigo } from "@mui/material/colors";

export default function XTRA() {
  return (
    <Box
      style={{
        position: "fixed",
        right: "30px",
        top: "30px",
      }}
    >
      <Typography
        variant="h3"
        style={{
          fontWeight: 700,
          // fontSize: "45px",
          // color: "rgb(16,35,104)",
          // color: "rgb(29, 60, 174)",
          color: indigo[900],
          textShadow:
            "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
          letterSpacing: "20px",
        }}
      >
        XTRA
      </Typography>
    </Box>
  );
}
