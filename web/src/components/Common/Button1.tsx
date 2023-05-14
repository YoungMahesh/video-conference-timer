import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

export default function Button1({
  children,
  onClick,
  disabled,
}: {
  children: any;
  onClick?: VoidFunction;
  disabled?: boolean;
}) {
  return (
    <Button
      style={{
        borderRadius: "50%",
        border: "none",
        padding: "20px",
        backgroundColor: disabled ? red[500] : "rgb(68,72,76)",
        color: "white",
        margin: "0 5px 0 5px",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
