"use client";

import { LocalizationProvider as MUILocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function LocalizationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MUILocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </MUILocalizationProvider>
  );
}
