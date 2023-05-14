import Box from "@mui/material/Box";
import Avtar1 from "../Common/Avatar1";

export default function ParticipantBackground() {
  return (
    <Box
      component="main"
      style={{ display: "flex", height: "100vh", width: "100vw" }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20vw",
          height: "100%",
        }}
      >
        <Avtar1
          name="Participant2"
          isNameAtBottom={true}
          style={{
            height: "200px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
        <Avtar1
          name="Participant3"
          isNameAtBottom={true}
          style={{
            height: "200px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
        <Avtar1
          name="Participant4"
          isNameAtBottom={true}
          style={{
            height: "200px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
      </Box>

      <Avtar1
        name="Host"
        isNameAtBottom={true}
        style={{
          width: "100%",
          borderTop: "none",
          borderRight: "none",
          borderBottom: "none",
        }}
      />
    </Box>
  );
}
