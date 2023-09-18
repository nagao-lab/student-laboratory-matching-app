"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const defaultTheme = createTheme();

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Layout;