import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import MainAppBar from "./ui/main-app-bar";
import "./global.css";
import theme from "./theme";

export const metadata: Metadata = {
  title: "EatWhat?",
  description: "Let's gather energy together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedIn>
            <MainAppBar />
          </SignedIn>

          <AppRouterCacheProvider>
            <CssVarsProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <main>{children}</main>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
