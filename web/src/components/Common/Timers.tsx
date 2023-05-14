import { useState, useRef, useEffect, forwardRef } from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Button1 from "../Common/Button1";
import { socket } from "../../utils/sockets";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const messages = [
  "Only host can manage the timer",
  "Timer of 15s started",
  "Timer of 30s started",
  "Timer of 45s started",
];
export default function Timers({ isHost }: { isHost?: boolean }) {
  const [remSeconds1, setRemSeconds1] = useState(15);
  const [remSeconds2, setRemSeconds2] = useState(30);
  const [remSeconds3, setRemSeconds3] = useState(45);
  const [tabIsActive, setTabIsActive] = useState(true);

  const [notification, setNotification] = useState("");

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setTabIsActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // function onConnect() {
    //   console.log("connected to server");
    // }
    // function onDisconnect() {
    //   console.log("disconnected from server");
    // }
    // socket.on("connect", onConnect);
    // socket.on("disconnect", onDisconnect);

    // function updateRemSeconds1(remSeconds: number) {
    //   console.log("received", remSeconds);
    //   setRemSeconds1(remSeconds);
    // }

    socket.on("remSeconds1", setRemSeconds1);
    socket.on("remSeconds2", setRemSeconds2);
    socket.on("remSeconds3", setRemSeconds3);

    return () => {
      // socket.off("connect", onConnect);
      // socket.off("disconnect", onDisconnect);

      socket.off("remSeconds1", setRemSeconds1);
      socket.off("remSeconds2", setRemSeconds2);
      socket.off("remSeconds3", setRemSeconds3);
    };
  }, []);

  useEffect(() => {
    if (remSeconds1 === 0 || remSeconds2 === 0 || remSeconds3 === 0) {
      if (tabIsActive) audioRef.current?.play();
    }
  }, [remSeconds1, remSeconds2, remSeconds3, tabIsActive]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setNotification("");
  };

  const timerClick = (remSeconds: number) => {
    if (isHost) {
      if (remSeconds === 15) {
        socket.emit("remSec1", null, () => {});
        setNotification(messages[1]);
      } else if (remSeconds === 30) {
        socket.emit("remSec2", null, () => {});
        setNotification(messages[2]);
      } else if (remSeconds === 45) {
        socket.emit("remSec3", null, () => {});
        setNotification(messages[3]);
      }
    } else setNotification(messages[0]);
  };

  return (
    <Box sx={{ marginRight: { xs: "10px", sm: "30px", md: "50px" } }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button1 onClick={() => timerClick(15)} disabled={remSeconds1 !== 15}>
          {`${remSeconds1} s`}
        </Button1>
        <Button1 onClick={() => timerClick(30)} disabled={remSeconds2 !== 30}>
          {`${remSeconds2} s`}
        </Button1>
        <Button1 onClick={() => timerClick(45)} disabled={remSeconds3 !== 45}>
          {`${remSeconds3} s`}
        </Button1>
      </Box>

      <audio ref={audioRef} src={"/ring.mp3"} />

      <Snackbar
        open={notification.length > 0 ? true : false}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={notification === messages[0] ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {notification}
        </Alert>
      </Snackbar>
    </Box>
  );
}
