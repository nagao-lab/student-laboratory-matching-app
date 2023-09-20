"use client";

import { ReactNode } from "react";
import { HeadrForm } from "@/features/header/header-form";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      
        <HeadrForm />
        {children}
    </>
  );
};

export default Layout;
