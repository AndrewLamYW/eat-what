import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import theme from "./theme";

export const metadata: Metadata = {
  title: "EatWhat",
  description: "Let's gather energy together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" style={{ height: "100%" }}>
        <body
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <AppRouterCacheProvider>
            <CssVarsProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <main style={{ display: "flex", flex: 1 }}>{children}</main>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
