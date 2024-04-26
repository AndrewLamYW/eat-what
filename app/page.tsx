"use client";

import PrivateHome from "@/app/ui/home/private";
import PublicHome from "@/app/ui/home/public";
import Box from "@mui/material/Box";

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
