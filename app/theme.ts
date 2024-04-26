"use client";

import {
  createTheme,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = createTheme();

const theme = extendTheme(defaultTheme, {
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "3rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "6rem",
      },
    },
    h2: {
      fontSize: "1.875rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "3.75rem",
      },
    },
  },

  //   colorSchemes: {
  //     light: { palette: { primary: { main: "#ff0000" } } },
  //     dark: { palette: { primary: { main: "#ff0000" } } },
  //   },
});

export default theme;
