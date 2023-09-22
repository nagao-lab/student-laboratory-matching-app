"use client";

import { ReactNode } from "react";
import { HeaderForm } from "@/features/header/header-form";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderForm />
      {children}
    </>
  );
};

export default Layout;
