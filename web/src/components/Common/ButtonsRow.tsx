import Box from "@mui/material/Box";
import SelfView from "./SelfView";
import CallManagement from "./CallManagement";
import Timers from "./Timers";

export default function ButtonsRow({ isHost }: { isHost?: boolean }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "50px",
        left: { xs: "5vw", sm: "20vw", md: "30vw" },
        right: { xs: "5vw" },
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        // width: '100%',
        justifyContent: "space-between",
      }}
    >
      <CallManagement />
      <Timers isHost={isHost} />
      <SelfView />
    </Box>
  );
}
