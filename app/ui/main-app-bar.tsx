import Logo from "@/app/ui/logo";
import MainSignInButton from "@/app/ui/main-sign-in-button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function MainAppBar() {
  return (
    <AppBar color="inherit" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Logo />
        </Typography>

        <SignedOut>
          <MainSignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
}
