"use client";

import Box from "@mui/material/Box";
import AuthenticatedHome from "./page-authenticated";
import UnauthenticatedHome from "./public";

export default function Home() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <AuthenticatedHome />
      <UnauthenticatedHome />
    </Box>
  );
}
