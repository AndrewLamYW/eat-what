import { SignInButton } from "@clerk/nextjs";
import Button, { ButtonProps } from "@mui/material/Button";

export default function MainSignInButton({
  buttonProps,
}: {
  buttonProps?: ButtonProps;
}) {
  return (
    <SignInButton>
      <Button {...buttonProps}>Sign in</Button>
    </SignInButton>
  );
}
