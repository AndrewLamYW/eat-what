import Logo from "@/app/ui/logo";
import MainSignInButton from "@/app/ui/main-sign-in-button";
import { SignedOut } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function UnauthenticatedHome() {
  return (
    <SignedOut>
      <Container>
        <Typography variant="h1" gutterBottom>
          <Logo />
        </Typography>

        <Typography variant="h2" gutterBottom>
          Let&apos;s eat together!
        </Typography>

        <Box>
          <MainSignInButton buttonProps={{ variant: "contained" }} />
        </Box>
      </Container>
    </SignedOut>
  );
}
