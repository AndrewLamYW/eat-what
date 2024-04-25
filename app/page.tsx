"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MainSignInButton from "./components/main-sign-in-button";

export default function Home() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SignedOut>
        <Container>
          <Typography variant="h1" gutterBottom>
            Welcome to EatWhat
          </Typography>

          <Typography variant="h2" gutterBottom>
            Group meals without the drama 😉
          </Typography>

          <Box>
            <MainSignInButton />
          </Box>
        </Container>
      </SignedOut>

      <SignedIn>Plan a group meal</SignedIn>
    </Box>
  );
}
