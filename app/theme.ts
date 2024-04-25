"use client";

import { Roboto } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  //   colorSchemes: {
  //     light: { palette: { primary: { main: "#ff0000" } } },
  //     dark: { palette: { primary: { main: "#ff0000" } } },
  //   },
});

export default theme;