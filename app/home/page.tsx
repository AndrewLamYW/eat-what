import Box from "@mui/material/Box";
import CreateSessionForm from "./create-session-form";

export default function PrivateHome() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <CreateSessionForm />
    </Box>
  );
}
