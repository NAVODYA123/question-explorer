"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/theme";

type Props = {
  children: React.ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
