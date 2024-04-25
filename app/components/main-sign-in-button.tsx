import { SignInButton } from "@clerk/nextjs";
import Button from "@mui/material/Button";

export default function MainSignInButton() {
  return (
    <SignInButton>
      <Button color="inherit" variant="outlined">
        Sign in
      </Button>
    </SignInButton>
  );
}
