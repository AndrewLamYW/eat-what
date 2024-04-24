import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Eat what?",
  description: "Let's gather energy together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
