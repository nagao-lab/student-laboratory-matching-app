"use client";

import { ReactNode } from "react";
import { HeaderForm } from "@/features/header/header-form";
import { SessionProvider } from "@/providers/session";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <HeaderForm />
      {children}
    </SessionProvider>
  );
};

export default Layout;
