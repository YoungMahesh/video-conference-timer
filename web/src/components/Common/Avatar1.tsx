import Box from "@mui/material/Box";
import { indigo } from "@mui/material/colors";
import { CSSProperties } from "react";

export default function Avtar1({
  style,
  name,
  isNameAtBottom,
}: {
  style?: CSSProperties;
  name?: string;
  isNameAtBottom?: boolean;
}) {
  return (
    <Box
      style={{
        border: "1px solid whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "relative",
        ...style,
      }}
    >
      {name ? (
        <span
          style={{
            position: "absolute",
            color: indigo[900],
            backgroundColor: "#dae7f3",
            padding: "7px",
            left: "5px",
            ...(isNameAtBottom ? { bottom: "5px" } : { top: "5px" }),
            borderRadius: "15px",
          }}
        >
          {name}
        </span>
      ) : null}
      <img
        src={"/person.svg"}
        height="100%"
        style={{ maxWidth: "100%" }}
        alt="person"
      />
    </Box>
  );
}
