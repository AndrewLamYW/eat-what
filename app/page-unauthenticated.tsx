import { SignedOut } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MainSignInButton from "./components/main-sign-in-button";

export default function UnauthenticatedHome() {
  return (
    <SignedOut>
      <Container>
        <Typography variant="h1" gutterBottom>
          <b>EatWhat?</b>
        </Typography>

        <Typography variant="h2" gutterBottom>
          What are we eating?
        </Typography>

        <Box>
          <MainSignInButton buttonProps={{ variant: "contained" }} />
        </Box>
      </Container>
    </SignedOut>
  );
}
