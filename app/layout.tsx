import LocalizationProvider from "@/app/localization-provider";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { CssVarsProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import "./global.css";
import theme from "./theme";
import MainAppBar from "./ui/main-app-bar";

export const metadata: Metadata = {
  description: "Let's gather energy together.",
  metadataBase: new URL("https://eatwhat.app"),
  title: "EatWhat?",
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
              <LocalizationProvider>
                <main>{children}</main>
              </LocalizationProvider>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
