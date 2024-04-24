import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EatWhat.app",
  description: "Group meal planning web app 🍽️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
