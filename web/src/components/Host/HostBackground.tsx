import Box from "@mui/material/Box";
import Avtar1 from "../Common/Avatar1";

export default function HostBackground() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        height: "100vh",
        width: "100vw",
        overflow: { xs: "auto", sm: "hidden" },
      }}
    >
      <Avtar1
        name="Participant1"
        style={{ borderLeft: "none", borderTop: "none" }}
      />
      <Avtar1
        name="Participant2"
        style={{ borderTop: "none", borderRight: "none", borderLeft: "none" }}
      />
      <Avtar1
        name="Participant3"
        style={{ borderLeft: "none", borderBottom: "none" }}
      />
      <Avtar1
        name="Participant4"
        style={{
          borderRight: "none",
          borderBottom: "none",
          borderLeft: "none",
        }}
      />
    </Box>
  );
}
