"use client";

import Box from "@mui/material/Box";
import PrivateHome from "./page-authenticated";
import PublicHome from "./public";

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
      <PrivateHome />
      <PublicHome />
    </Box>
  );
}
