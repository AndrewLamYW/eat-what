import { SignedIn } from "@clerk/nextjs";

export default function AuthenticatedHome() {
  return <SignedIn>Plan a group meal</SignedIn>;
}
