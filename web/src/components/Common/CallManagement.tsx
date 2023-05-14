import Box from "@mui/material/Box";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import Button1 from "../Common/Button1";

export default function CallManagement({ isHost }: { isHost?: boolean }) {
  return (
    <Box sx={{ marginRight: { xs: "10px", sm: "30px", md: "50px" } }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button1>
          <VideocamOffOutlinedIcon />
        </Button1>
        <Button1>
          <MicOffOutlinedIcon />
        </Button1>
        {isHost ? (
          <Button1>
            <GroupRemoveOutlinedIcon />
          </Button1>
        ) : null}
        <Button1>
          <CallEndOutlinedIcon />
        </Button1>
      </Box>
    </Box>
  );
}
