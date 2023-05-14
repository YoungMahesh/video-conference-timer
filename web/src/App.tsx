import "./App.css";
import { Link } from "@tanstack/router";
import Box from "@mui/material/Box";
import { indigo } from "@mui/material/colors";

function App() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          width: "400px",
          color: indigo[900],
          backgroundColor: "white",
        }}
      >
        <Link style={{ color: indigo[900] }} to="/host" target="_blank">
          Host Page
        </Link>
        <Link
          style={{ color: indigo[900], marginTop: "15px" }}
          target="_blank"
          to="/participant"
        >
          Participant Page
        </Link>
      </Box>
    </Box>
  );
}

export default App;
