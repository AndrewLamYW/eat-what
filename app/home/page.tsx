import { getDiningSessions } from "@/app/lib/data";
import Box from "@mui/material/Box";
import CreateSessionForm from "./create-session-form";
import DiningSessionList from "./dining-session-list";

export default async function PrivateHome() {
  const diningSessions = await getDiningSessions();

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
      }}
    >
      <CreateSessionForm />
      <DiningSessionList diningSessions={diningSessions} />
    </Box>
  );
}
